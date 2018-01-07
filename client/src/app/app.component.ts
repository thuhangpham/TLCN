import { Component } from '@angular/core';
import { PlatformLocation } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private platform: PlatformLocation){
    this.platform.onPopState(()=>{
      window.location.reload();
    });
  }
}
