import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public emailOrPhone: string = '';
  public password: string = '';
  public isLogin: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.isLogin = this.loginService.checkLogin();
  }

  submitLogin(){
    console.log(this.emailOrPhone, this.password);
    const result = this.loginService.login(this.emailOrPhone, this.password);

    if(result){
      const currentUser = this.loginService.getCurrentLoggedInUser();
      console.log(currentUser);
    } else {
      alert('invalid credentials')
    }
  }
}
