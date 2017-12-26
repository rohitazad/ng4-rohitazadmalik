import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { ISkillData } from '../skill/skill';

@Injectable()
export class SkillService {

  private _sakillApiUrl:string = './../API_SERVICES/skillPage.json';
  
  constructor(private _http: HttpClient) { }


  getData():Observable<[ISkillData]>{
    //console.log('skill service start here ' + this._sakillApiUrl)
    return this._http.get<[ISkillData]>(this._sakillApiUrl)
              .do(data => {
                    //console.log('All: ' + JSON.stringify(data))
                  }
            )
              .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
      console.error(err.message);
      return Observable.throw(err.message);
  }

}
