import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormControl, FormControlName } from '@angular/forms';

import { MapsAPILoader, AgmCoreModule } from '@agm/core';
import { } from 'googlemaps';

import { UsersService, AlertService, LocationService } from '../../_services/index';
import { VerifyService } from '../../_services/verify.service';
import { EmploySituationService } from '../../_services/employ-situation.service';
import { AreaExperService } from '../../_services/area-exper.service';
import { PostService } from '../../_services/post.service';
import { Users, AreaExpertise, EmploySituation, AreaExpertiseDetail, Post } from '../../_models/index';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public loading = false;
  minYear: string;
  maxYear: string;
  // cities: City;
  // districtes: District = new District();
  // wards: Ward;
  areaExs: AreaExpertise;
  areaExsDetails: [AreaExpertiseDetail];
  city: Number;
  user: Users = new Users();



  public isRouteHome = false;
  public post: Post = new Post();


  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public google: any;

  id: number;
  private sub: any;


  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(
    private alert: AlertService,
    private usersService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private verifyService: VerifyService,
    private locationService: LocationService,
    private areaExService: AreaExperService,
    private employSTService: EmploySituationService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private titleService: Title,
    private postService: PostService) {
    verifyService.verify().then(res => {
      if (res.result !== 1) {
        this.router.navigate(['/']);
      }
    }).catch(err => { Promise.reject('' || err); })
    const d = new Date();
    this.minYear = d.getFullYear().toString() + '-' + d.getMonth() + '-' + d.getDay();
    this.maxYear = (d.getFullYear() + 100).toString() + '-' + d.getMonth() + '-' + d.getDay();
  
  }

  ngOnInit() {

    this.latitude = 39.8282;
    this.longitude = -98.5795;
    this.titleService.setTitle('Volunteer | Create an event');
    this.load();
    //set google maps defaults
    this.zoom = 4;
    //create search FormControl
    this.searchControl = new FormControl();
    
    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete
        (this.searchElementRef.nativeElement, {

        });

      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.post.info.latitude = this.latitude.toString();
          this.post.info.longitude = this.longitude.toString();
          this.post.info.address = place.formatted_address;

          console.log('lat, long ' + this.latitude + ' ' + this.longitude);
          console.log(place);

          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;

      });
    }
  }
  submit(value: any) {
    console.log(value);
    console.log(this.post);
    this.post.createdAt = new Date();
    if (value) {
      // if (!this.latitude || !this.longitude) {
      //   this.alert.error('Address is incorrect!');
      //   return;
      // }
      this.loading = true;
      this.postService.addPost(JSON.stringify(this.post)).subscribe(
        (data) => {
          if (data.json().result === 1) {
            this.loading = false;
            console.log('post OK ' + data);
            this.alert.success('Create event successful!', true);
            // window.open('/');
            this.router.navigate(['/']);
            // window.location.reload();
            
          } else {
            this.loading = false;
            console.log('dang ky err ' + data);
            this.alert.error(`${data.json().msg}`, true);
          }
        },
        (err) => {
          console.log('err ' + err);
          this.alert.error(err, false);
          this.loading = false;
        });
    }
  }
  load() {

    const id = JSON.parse(localStorage.getItem('currentUser')).user._id;
    this.post.owner = id;
    this.usersService.getUsersById(id).catch(err => { console.log(err) })
      .then(data => {
        if (data.result === 1) {
          this.user = data.data;
          this.post.contact.email = this.user.contact.email;
          this.post.contact.phone = this.user.contact.phone;
        }
      });

    this.areaExService.getAreaEx().subscribe(
      data => {
        this.areaExs = data;
        console.log(this.areaExs.data);
      }, err => { console.log(err); }
    );

  }
  onChangeAreasExpertise($event) {
    console.log($event);
    this.areaExService.getAreaExById($event).subscribe(data => {
      if (data.result === 1) {
        // console.log(data);
        this.areaExsDetails = data.data.areas_ex_details;
      }
    }, err => {

    })
    //this.areaExs.data.
    // this.areaExsDetails = this.areaExs.data.areas_ex_details;
  }
}
