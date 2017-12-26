import { Component, OnInit } from '@angular/core';

import { IPortFolioData } from './portfolio';
import { PortfolioService } from '../services/portfolio.service';

import { TruncatePipe } from '../customePipe/truncate';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  title:string = 'portfolio';
  portfolioList;errorMessage;
  listFilter:string = "Css";
  constructor(private _portServ:PortfolioService) { }

  ngOnInit() {
    this._portServ.getData().subscribe( data => {
      //console.log(data);
      this.portfolioList = data[0].portfolioList;
      //console.log(this.portfolioList);
    }, error => this.errorMessage = <any>error)
  }

}
