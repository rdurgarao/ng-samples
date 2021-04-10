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
import { OrderService } from './order.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { CurrencyPipe } from './currency.pipe';
import { CreateOrderPaymentComponent } from './create-order-payment/create-order-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    ProductCardComponent,
    CartComponent,
    CheckoutComponent,
    CreateOrderComponent,
    CurrencyPipe,
    CreateOrderPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CookieModule.forRoot()
  ],
  providers: [CartService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
