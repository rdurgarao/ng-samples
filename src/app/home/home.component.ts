import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('title') titleEle; 
  public titleMsg: string = 'Welcome to Grocery store';
  constructor() { }

  ngOnInit(): void {
    const colors:string[] = ['#000', '#fff', '#5c5c5c', '#fefefe', 'red'];
    setInterval(() => {
      let index = Math.floor((Math.random() * 10)/2.5);
      this.titleEle.nativeElement.style.setProperty('background-color', colors[index]);
    }, 3000);
  }
}
