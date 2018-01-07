import { Component, OnInit, NgZone, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Users } from '../../_models/users';
import { UsersService } from '../../_services/index';
import { Title } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { MapsAPILoader, AgmCoreModule } from '@agm/core';
import { } from 'googlemaps';

import { ApplySocketService } from '../../_socket/apply-socket.service';
import { AreaExperService } from '../../_services/area-exper.service';
import { Post, PostData } from '../../_models/index'
import { PostService } from '../../_services/post.service';
import { AreaExpertise, AreaExpertiseCount } from '../../_models/area-ex';
import { appConfig } from '../../app.config';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // post by ID
  id: number;
  private sub: any;
  post: PostData = new PostData();
  // end post by ID //
  currentUsers: Users;
  users: Users[] = [];
  private areaID: any = null;

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public google: any;
  public posts: Post[] = [];
  public loadMore: any = false;
  private remaining: boolean = true;
  private skip: any = 0;
  loading: any = true;
  isPostDetail: any = false;
  @ViewChild('search')
  public searchElementRef: ElementRef;

  public areaExsCounts = [AreaExpertiseCount];

  constructor(private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private areaExService: AreaExperService,
    private postService: PostService,
    private mApplySocket: ApplySocketService) {
    this.titleService.setTitle("Volunteers | Home");
    this.loadPostId();
  }
  loadPostId() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      // this.id = +params['id']; // (+) converts string 'id' to a number
      this.id = params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
    });
  }
  loadPost() {
    this.postService.getPostById(this.id).catch(err => {
      window.alert('An error has occured when load post!');
    })
      .then(data => {
        if (data.result == 1) {
          this.posts.push(data.data);
          this.loading = false;
        }
        else this.isPostDetail = true;
      });
  }
  loadAllUsers() {
    this.usersService.getAll().then((data) => {
      this.users = data;
    }).catch((err) => {
      console.log('Error ' + err);
    });
  }
  loadPosts(limit, spkip) {
    this.postService.getPosts(limit, spkip).catch(err => {
      window.alert('Server error!');
      this.loading = false;
    }).then(data => {
      this.loading = false;
      if (data.result === 1) {
        if (data.data.length > 0) {
          console.log('data.data ' + data.data.length);
          let arr: Post[] = new Array();
          this.isPostDetail = false;
          arr = data.data;
          this.posts.forEach(e => {
            arr.forEach((p, i) => {
              if (e._id == p._id)
                arr.splice(i, 1);
            })
          });
          this.posts = [...this.posts, ...arr];
        } else {
          this.remaining = false;
        }
        this.loadMore = false;
      } else window.alert('Server error!');
    });

  }
  ngOnInit() {
    if (this.id)
      this.loadPost();
    else {
      console.log('');
      this.posts = [];
      this.loadPosts(appConfig.LIMIT, this.posts.length);
    }
    if (!this.id) // load by post detail
      this.areaExService.countPostByAreaEx().subscribe(data => {
        if (data.result == 1 && data) {
          this.areaExsCounts = data.data;
        } else {

        }
      }, err => {
        console.log(err || 'err');
      });


    // this.loadAllUsers();
    // //set google maps defaults
    // this.zoom = 4;
    // this.latitude = 39.8282;
    // this.longitude = -98.5795;

    // //create search FormControl
    // this.searchControl = new FormControl();

    // //set current position
    // this.setCurrentPosition();

    // //load Places Autocomplete
    // this.mapsAPILoader.load().then(() => {
    //   let autocomplete = new google.maps.places.Autocomplete
    //     (this.searchElementRef.nativeElement, {

    //     });

    //   autocomplete.addListener('place_changed', () => {
    //     this.ngZone.run(() => {
    //       //get the place result
    //       let place: google.maps.places.PlaceResult = autocomplete.getPlace();

    //       //verify result
    //       if (place.geometry === undefined || place.geometry === null) {
    //         return;
    //       }

    //       //set latitude, longitude and zoom
    //       this.latitude = place.geometry.location.lat();
    //       this.longitude = place.geometry.location.lng();

    //       console.log('lat, long ' + this.latitude + ' ' + this.longitude);
    //       console.log(place);

    //       this.zoom = 12;
    //     });
    //   });
    // });
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
  getPostsByArea(_id) {
    this.postService.getPostsByArea(appConfig.LIMIT, 0, _id).catch(err => {
      console.log(err || 'Error');
      this.loading = false
      window.alert('Error get data from server!');
    })
      .then(data => {
        this.loading = false;
        // this.posts = [];
        this.posts = data.data;
        // this.posts.forEach(e=>{
        //   e.info.title= e.info.title.toUpperCase();
        //   this.posts[this.posts.length] = e;
        // });
      });
  }
  clickArea(e) {
    this.posts = [];
    this.loading = true;
    this.isPostDetail = false;
    this.id = undefined;
    this.areaID = e.area_ex._id;
    console.log(e.area_ex._id);
    this.getPostsByArea(this.areaID);
  }
  @HostListener("window:scroll", [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight
      && !this.loadMore && !this.id) {
      // you're at the bottom of the page
      console.log('// youre at the bottom of the page');
      if (this.posts.length > 0)
        this.loadMore = true;
      if (this.areaID)
        this.getPostsByArea(this.areaID);
      else
        this.loadPosts(appConfig.LIMIT, this.posts.length);
    }
  }
}