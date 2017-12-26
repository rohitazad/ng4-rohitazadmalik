import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IAboutData } from '../about/about';

@Injectable()
export class AboutUsService {

  private _homeApiUrl:string = './../API_SERVICES/aboutPage.json'
  constructor(private _http: HttpClient) { }

  getData():Observable<[IAboutData]>{
    //console.log('about page service start here ' + this._homeApiUrl)
    return this._http.get<[IAboutData]>(this._homeApiUrl)
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
