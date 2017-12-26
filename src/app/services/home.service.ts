import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IHomeData } from '../home/home';

@Injectable()
export class HomeService {

  private _homeApiUrl:string = './../API_SERVICES/homePage.json'
  constructor(private _http: HttpClient) { }


  getData():Observable<[IHomeData]>{
    //console.log('home page service start here ' + this._homeApiUrl)
    return this._http.get<[IHomeData]>(this._homeApiUrl)
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
