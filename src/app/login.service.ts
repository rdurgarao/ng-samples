import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

import * as LoginDetailsJSON from '../data/users.json';
import * as LoginJSON from '../data/logins.json';

import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private cookieService: CookieService) { }

  public _isLogin: BehaviorSubject<any> = new BehaviorSubject(!!this.getCurrentUser());

  login(emailOrPhone: string, password: string){
    const logins = (LoginJSON  as  any).default;
    const matchedResults = logins.filter(login => login.emailOrPhone === emailOrPhone);

    if(matchedResults.length === 0){
      this._isLogin.next(false);
      return false;
    } else {
      if(matchedResults[0].password === password){
        this.storeLoginInCookies(emailOrPhone);
        this._isLogin.next(true);
        return true;
      } else {
        this._isLogin.next(false);
        return false;
      }
    }
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
