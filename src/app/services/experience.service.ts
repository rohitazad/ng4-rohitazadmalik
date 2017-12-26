import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IExperienceData } from '../experience/experience';

@Injectable()
export class ExperienceService {

  private _homeApiUrl:string = './../API_SERVICES/experiences.json'
  constructor(private _http: HttpClient) { }

  getData():Observable<[IExperienceData]>{
    //console.log('experience page service start here ' + this._homeApiUrl)
    return this._http.get<[IExperienceData]>(this._homeApiUrl)
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
