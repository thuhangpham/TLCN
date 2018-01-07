import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import {
  FormControl
} from '@angular/forms';
import { Router } from '@angular/router'
import { MapsAPILoader, AgmCoreModule } from '@agm/core';
import { } from 'googlemaps';

import { Users } from '../../_models/index';
import { AlertService } from '../../_services/alert.service';
import { UsersService } from '../../_services/users.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  user: Users = new Users();
  loading: any = false;
  load: any = true;
  message: any;


  public searchControl: FormControl;
  public zoom: number;
  public google: any;

  @ViewChild('search')
  public searchElementRef: ElementRef;


  constructor(
    private userService: UsersService,
    private alertService: AlertService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {
    this.user.address_residence.latitude = 10.8480966697085;
    this.user.address_residence.longitude = 106.81203118029157;
    if (localStorage.getItem('currentUser') === null) {
      this.load = false;
      this.message = 'Please login to continues...';
      return;
    }
    this.message = 'Chờ em xíu...';
    const id = JSON.parse(localStorage.getItem('currentUser')).user._id;
    this.userService.getUsersById(id).catch(err => { console.log(err); })

      .then(data => {
        if (data.result === 1) {
          this.user = data.data;
          this.load = false;
          this.message = '';
        }
      });
  }
  lodMap() {
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
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
          this.user.address_residence.latitude = place.geometry.location.lat();
          this.user.address_residence.longitude = place.geometry.location.lng();
          this.user.address_residence.address = place.formatted_address;
          this.zoom = 12;
        });
      });
    });
  }
  ngOnInit() {
    this.user.info.gender = 0 + '';
    //set google maps defaults
    this.zoom = 4;
    this.user.address_residence.latitude = 39.8282;
    this.user.address_residence.longitude = -98.5795;
    //create search FormControl
    this.searchControl = new FormControl();
    //set current position
    this.setCurrentPosition();
    this.lodMap();
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.user.address_residence.latitude = position.coords.latitude;
        this.user.address_residence.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
  save(val: any) {
    if (val) {
      this.loading = true;
      this.userService.updateUser(this.user).subscribe(data => {
        this.loading = false;
        if (data.json().result === 1) {
          this.alertService.success('Update completed!');
        }
        else this.alertService.error(data.json().msg);
      });
    }
  }

}
