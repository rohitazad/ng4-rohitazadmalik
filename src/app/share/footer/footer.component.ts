import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  name:string = 'rohit azad';
  url:string = 'http://www.rohitazad.com/';
  title:string = 'created with'
  constructor() { }

  ngOnInit() {
  }

}
