import { Component, OnInit } from '@angular/core';

import { AboutUsService } from '../services/about-us.service';

import { IAboutData } from './about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title = 'About Us';
  errorMessage: string;
  aboutData: any[];
  
  aboutHeader;aboutHighLight;expert;


  constructor(private _aboutService : AboutUsService) { }

  ngOnInit() {
    //console.log('Ng on init about page ');

    this._aboutService.getData().subscribe(
      data => {
        //console.log(data);
        // ==============
          this.aboutData = data;
          this.aboutHeader = data[0].aboutHeader;
          //console.log(this.aboutHeader );
          this.aboutHighLight = data[1].aboutHighLight;
          this.expert = data[2].expert;
        // ==============
      },error => this.errorMessage = <any>error)

  }

}
