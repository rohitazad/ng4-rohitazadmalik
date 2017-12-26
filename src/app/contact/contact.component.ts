import { Component, OnInit } from '@angular/core';
import {IHomeData} from '../home/home';

import { HomeService } from '../services/home.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  errorMessage;
  title:string = "contact";
  contactData:any[];
  address;emailId;contactNo;facebook;twitter;googelPlus;linkedin;stackUrl;
  constructor(private _contSer : HomeService) { }

  ngOnInit() {
    this._contSer.getData().subscribe( data => {
      //console.log(data);
      this.contactData = data;
      this.address = this.contactData[6].address;
      this.emailId = this.contactData[5].emailId;
      this.contactNo = this.contactData[4].contactNo;
      this.facebook = this.contactData[8].facebook;
      this.twitter = this.contactData[7].twitter;
      this.googelPlus = this.contactData[9].googelPlus;
      this.linkedin = this.contactData[10].linkedin;
      this.stackUrl = this.contactData[11].stackUrl;
    }, error => this.errorMessage = <any>error)
  }

}
