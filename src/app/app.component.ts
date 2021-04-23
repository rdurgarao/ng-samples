import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from './http-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'shopping-cart';
  public loading = false;

  constructor(private restService: HttpRequestService){
  }

  ngOnInit(): void {
    this.restService._isLoading.subscribe(loading => {
      this.loading = true;
      setTimeout(() => {
        this.loading = loading;
      }, 5000)
    });
  }
}
