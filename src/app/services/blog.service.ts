import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IBlogData } from '../blog/blog';


@Injectable()
export class BlogService {
  private _blogSerApi:string = './../API_SERVICES/blogPage.json';
  constructor(private _http:HttpClient) { }

  getData():Observable<[IBlogData]>{
    //console.log('about page service start here ' + this._homeApiUrl)
    return this._http.get<[IBlogData]>(this._blogSerApi)
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
