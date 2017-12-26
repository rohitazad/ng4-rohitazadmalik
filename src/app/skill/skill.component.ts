import { Component, OnInit } from '@angular/core';

import { SkillService } from '../services/skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  errorMessage;
  title:string = "skill";
  skillValue:any[];
  constructor(private _skillService:SkillService) { }

  ngOnInit() {
    //console.log('skill life cycle');
    //console.log(this._skillService);
    //console.log(this._skillService.getData());
      this._skillService.getData().subscribe( data => {
        //console.log(data);
        this.skillValue = data[0].skillValue;
        //console.log(this.skillValue);
      }, error => this.errorMessage = <any>error)
  }

}
