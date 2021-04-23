import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

import * as LoginDetailsJSON from '../data/users.json';
import * as LoginJSON from '../data/logins.json';

import { CookieService } from 'ngx-cookie';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private cookieService: CookieService, private httpReq: HttpRequestService) { }

  public _isLogin: BehaviorSubject<any> = new BehaviorSubject(!!this.getCurrentUser());

  login(emailOrPhone: string, password: string){

    const reqBody = {
      email: emailOrPhone,
      password
    }
    
    this.httpReq.post('login', reqBody).subscribe(res => {
      if(res['status'] == 'success') {
        this._isLogin.next(true);
      } else {
        this._isLogin.next(false);
        alert("invalid credentials")
      }
    })
  }

  storeLoginInCookies(emailOrPhone){
    this.cookieService.put('emailOrPhone', emailOrPhone);
  }

  checkLogin(){
    return this.cookieService.get('emailOrPhone') && this.cookieService.get('emailOrPhone').length > 0;
  }

  getCurrentLoggedInUser(){
    const loginUser = this.cookieService.get('emailOrPhone');
    const userDetails = (LoginDetailsJSON  as  any).default;
    const details = userDetails.filter(detail => detail.email === loginUser || detail.phone === loginUser);

    return details[0];
  }

  getCurrentOneTimeUser(){
    return this.cookieService.get('oneTimeUserDetails') ? JSON.parse(this.cookieService.get('oneTimeUserDetails')) : null;
  }

  logout(){
    this.cookieService.remove('emailOrPhone');
    this.cookieService.remove('oneTimeUserDetails');
  }

  storeLoginInCookiesOfOneTimeUser(details) {
    this.cookieService.put('oneTimeUserDetails', details);
  }

  getCurrentUser() {
    return this.getCurrentOneTimeUser() || this.getCurrentLoggedInUser();
  }
}
