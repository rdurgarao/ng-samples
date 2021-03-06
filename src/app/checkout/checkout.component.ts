import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
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
  public nonLoginUserForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: new FormControl(''),
    email: ['', Validators.compose([Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
    phone: new FormControl(''),
    address: new FormControl('')
  });

  constructor(private loginService: LoginService, 
    private route: ActivatedRoute, private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.isLogin = !!this.loginService.checkLogin();

    this.loginService._isLogin.subscribe(isLogin => {
      if(isLogin){
        this.redirectToCreateOrder();
      }
    })

    if(this.isLogin) {
      this.redirectToCreateOrder();
    } else {
      const oneTimeDetails = this.loginService.getCurrentOneTimeUser();
      this.nonLoginUserForm.patchValue(
        {
          'firstName': oneTimeDetails.firstName,
          'lastName': oneTimeDetails.lastName,
          'email': oneTimeDetails.email,
          'phone': oneTimeDetails.phone, 
          'address': oneTimeDetails.address
        }
      )
    }
  }

  redirectToCreateOrder(): void {
    this.router.navigate(['/create-order'], { relativeTo: this.route });
  }

  submitLogin(){
    console.log(this.emailOrPhone, this.password);
    this.loginService.login(this.emailOrPhone, this.password);

    // if(result){
    //   const currentUser = this.loginService.getCurrentLoggedInUser();
    //   this.redirectToCreateOrder();
    // } else {
    //   alert('invalid credentials')
    // }
  }

  proceedNonLoginUserSubmit() {
    
    Object.keys(this.nonLoginUserForm.controls).forEach(key => {
      this.nonLoginUserForm.controls[key].markAsDirty();
     });

    if(this.nonLoginUserForm.valid){
      const details = JSON.stringify(this.nonLoginUserForm.value);
      this.loginService.storeLoginInCookiesOfOneTimeUser(details);
      this.redirectToCreateOrder();
    }
  }
}
