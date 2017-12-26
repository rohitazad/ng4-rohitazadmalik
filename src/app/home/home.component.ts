import { Component, OnInit } from '@angular/core';
import {HomeService} from '../services/home.service';

import { IHomeData } from './home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title:string = 'Home component srohit azad malik'
  errorMessage: string;

  // here define your html value start
  name;rohitTitle;position;aboutText;emailId;twitter;address;contactNo;facebook;linkedin;twitterName;googelPlus;stackUrl;stackImg;stackTitle;stackAlt;
  // here define your html value end
  homeData:IHomeData[] = [];
  constructor(private _homeService: HomeService) {
      
   }
   
  ngOnInit():void {
    //console.log('on init Liftecycle hoook');
    this._homeService.getData().subscribe(
      data => {
        this.homeData = data;
        //console.log(this.homeData);
        // here define your html name value property start
        this.name = this.homeData[0].name;
        this.rohitTitle = this.homeData[1].rohitTitle;
        this.position = this.homeData[2].position;
        this.aboutText = this.homeData[3].aboutText;
        this.emailId = this.homeData[5].emailId;
        this.twitter = this.homeData[7].twitter;
        this.address = this.homeData[6].address;
        this.contactNo = this.homeData[4].contactNo;
        this.facebook = this.homeData[8].facebook;
        this.linkedin = this.homeData[10].linkedin;
        this.twitterName = this.homeData[7].twitterName;
        this.googelPlus = this.homeData[9].googelPlus;
        this.stackUrl = this.homeData[11].stackUrl;
        this.stackImg = this.homeData[11].stackImg;
        this.stackAlt = this.homeData[11].stackAlt;
        this.stackTitle = this.homeData[11].stackTitle;
        // here define your html name value property end 
      },
       error => this.errorMessage = <any>error);
  }

}
