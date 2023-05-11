import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss', './media-style.scss']
})
export class PortfolioComponent implements OnInit{
  constructor(private portfolioService: Portfolio) {}

hide_details: boolean = true
info_type!: string;

description: string = ''
path: string = ''
path_name = ''

showDetails(data: string, num?: any) {

  if(data !== 'back') {
    this.info_type = data
    this.description = this.portfolioService.portfolio_description[num]
    this.path = this.portfolioService.path[num]
    this.path_name  = this.portfolioService.path_name[num]
  }
  

  if(data === 'back') {
    this.hide_details = true
  } else if(data === 'lingvo' || data === 'zola' || data === 'improvity') {
    this.hide_details = false;
  } 
}
  ngOnInit(): void {
    
  }

}
