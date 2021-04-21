import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private http: HttpClient) { }

  get(url, opts?){
    const fullUrl = environment.baseURL + '/' + url;
    return this.http.get(fullUrl, opts);
  }

  post(url, data, opts?){
    const fullUrl = environment.baseURL + '/' + url;
    return this.http.post(fullUrl, data, opts);
  }
}
