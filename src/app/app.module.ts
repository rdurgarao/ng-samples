import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CookieModule } from 'ngx-cookie';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProductCardComponent } from './shared/product-card/product-card.component';
import { CartComponent } from './shared/cart/cart.component';
import { CartService } from './cart.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { CreateOrderComponent } from './create-order/create-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    ProductCardComponent,
    CartComponent,
    CheckoutComponent,
    CreateOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CookieModule.forRoot()
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
