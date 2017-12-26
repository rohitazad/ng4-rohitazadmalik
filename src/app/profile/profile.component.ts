import { Component, OnInit } from '@angular/core';


import { IProfileData } from './profile';
import { IHomeData } from '../home/home';
import {HomeService} from '../services/home.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title = "Profile";
  profileData;
  _profileData;
  constructor(private _profileService : HomeService) { }

  name;contactNo;emailId;availability;dob;hobby;interset;

  ngOnInit() {
    //console.log('Profile life cycle hook');
      this._profileService.getData().subscribe(
      data => {
          //console.log(data);
          this.profileData  = data;
          this._profileData = this.profileData[13].profileData;
          //console.log(this._profileData);
          this.name = this.profileData[0].name;
          this.emailId = this.profileData[5].emailId;
          this.contactNo = this.profileData[4].contactNo;
          this.dob = this.profileData[12].dob;
          this.availability = this._profileData[0].availability;
          this.hobby = this._profileData[1].hobby;
          this.interset = this._profileData[2].interset;
          //console.log(this.hobby);
          //console.log(this.interset);
      })
  }

}
