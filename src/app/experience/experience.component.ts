import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  title:string = "experiences";

  _exData;errorMessage;company;
  constructor(private _exService : ExperienceService) { }

  ngOnInit() {
    //console.log('life cycle hook ng oninint ');
    this._exService.getData().subscribe(
      data =>{
        //console.log(data);
        this.company = data[0].company;
      }, error => this.errorMessage = <any>error)

  }

}
