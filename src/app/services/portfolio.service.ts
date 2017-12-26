import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


import { IPortFolioData } from '../portfolio/portfolio';

@Injectable()
export class PortfolioService {



  private _portfolioApiUrl:string = 'http://rohitazad.com/ng4-rohitazadmalik/API_SERVICES/portfolioPage.json'
  constructor(private _http: HttpClient) { }


  getData():Observable<[IPortFolioData]>{
    //console.log('portfolio service start here ' + this._portfolioApiUrl)
    return this._http.get<[IPortFolioData]>(this._portfolioApiUrl)
              .do(data => {
                   // console.log('All: ' + JSON.stringify(data))
                  }
            )
              .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
      console.error(err.message);
      return Observable.throw(err.message);
  }

}
