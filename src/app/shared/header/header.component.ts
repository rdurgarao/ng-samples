import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {LoginService} from '../../login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  public isLogin: boolean = false;
  ngOnInit(): void {
    this.loginService._isLogin.subscribe(isLogin => {
      this.isLogin = isLogin;
    });
    // this.isLogin = this.loginService.getCurrentLoggedInUser();
  }

  logout(){
    this.isLogin = false;
    this.loginService.logout();
    this.router.navigate(['home']);
  }
}
