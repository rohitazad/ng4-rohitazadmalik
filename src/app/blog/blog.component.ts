import { Component, OnInit } from '@angular/core';

import { BlogService } from '../services/blog.service';
import { IBlogData } from './blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  title:string = "Blog";
  errorMessage;
  blogList;
  _blogList:any[];
  constructor(private _blogServ :BlogService) { }

  ngOnInit() {
    this._blogServ.getData().subscribe( data => {
      //console.log(data);
      this._blogList = data[0].blogList;
    }, error => this.errorMessage = <any>error)
  }

}
