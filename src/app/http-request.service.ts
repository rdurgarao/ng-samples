import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { finalize } from 'rxjs/operators';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  public _isLoading: BehaviorSubject<any> = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  get(url, opts?){
    this._isLoading.next(true);
    const fullUrl = environment.baseURL + '/' + url;
    return this.http.get(fullUrl, opts).pipe(finalize(() => this._isLoading.next(false)));
  }

  post(url, data, opts?){
    this._isLoading.next(true);
    const fullUrl = environment.baseURL + '/' + url;
    return this.http.post(fullUrl, data, opts).pipe(finalize(() => this._isLoading.next(false)));
  }
}
