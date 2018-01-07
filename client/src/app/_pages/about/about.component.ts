import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EmploySituationService } from '../../_services/employ-situation.service';
import { AreaExperService } from '../../_services/area-exper.service';
import { Users, AreaExpertise, EmploySituation } from '../../_models/index';
import { UsersService, AlertService } from '../../_services/index';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  areaExs: AreaExpertise;
  employSt: EmploySituation;
  user: Users = new Users();
  loading: any = false;
  message: any;
  constructor(
    private alert: AlertService,
    private usersService: UsersService,
    private areaExService: AreaExperService,
    private employSTService: EmploySituationService,
    private titleService: Title
  ) {
    this.user.info.areas_expertise = '';
    this.user.info.employment_sitution = '';
    this.message = 'Chờ em xíu...';
    const id = JSON.parse(localStorage.getItem('currentUser')).user._id;
    this.usersService.getUsersById(id).catch(err => { // console.log(err); 
    })

      .then(data => {
        if (data.result === 1) {
          this.user = data.data;
          if (!this.user.info.areas_expertise)
            this.user.info.areas_expertise = '';
          else this.user.info.areas_expertise = data.data.info.areas_expertise._id
          if (!this.user.info.employment_sitution)
            this.user.info.employment_sitution = '';
          else this.user.info.employment_sitution = data.data.info.employment_sitution._id;
          this.loading = false;
          this.message = '';
          // // console.log('user.info.areas_expertise '+this.user.info.areas_expertise);
        }
      });
  }

  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.employSTService.getEmploySituations().subscribe(
      data => {
        this.loading = false;
        this.employSt = data;
        // // console.log(this.employSt);
      }, err => { // console.log(err); 
      }
    );

    this.areaExService.getAreaEx().subscribe(
      data => {
        this.areaExs = data;
        // // console.log(this.areaExs);
      }, err => { // console.log(err); 
      }
    );
  }
  save(val: any) {
    if (val) {
      this.loading = true;
      this.usersService.updateUser(this.user).subscribe(data => {
        this.loading = false;
        if (data.json().result === 1) {
          this.alert.success('Update completed!');
        }
        else this.alert.error(data.json().msg);
      });
    }
  }
}
