import { Component, OnInit } from '@angular/core';

import {IEducationData} from './education';
import {AboutUsService} from '../services/about-us.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  title = "education"
  constructor(private _eduService:AboutUsService) { }
  errorMessage;_eduData;educationData;postDeg;deg;webCer;webCer2;
  ngOnInit() {
    //console.log('education run here...');
    this._eduService.getData().subscribe(
      data => {
        
        this._eduData = data;
        this.educationData = this._eduData[3].educationData;
        //console.log(this.educationData);
        this.postDeg = this.educationData[0].postDeg;
        this.deg = this.educationData[1].deg;
        this.webCer = this.educationData[2].webCer;
        this.webCer2 = this.educationData[3].webCer2;
      }, error => this.errorMessage = <any>error)
  }

}
