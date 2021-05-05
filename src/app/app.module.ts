import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CookieModule } from 'ngx-cookie';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProductCardComponent } from './shared/product-card/product-card.component';
import { CartComponent } from './shared/cart/cart.component';
import { CartService } from './cart.service';
import { OrderService } from './order.service';
import { ProductsService } from './products.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { CurrencyPipe } from './currency.pipe';
import { CreateOrderPaymentComponent } from './create-order-payment/create-order-payment.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrdersComponent } from './orders/orders.component';
import { HttpRequestService } from './http-request.service';
import { productsReducer } from './products.reducer';
import { cartReducer } from './cart.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './products.effects';
import { ProductsSearchComponent } from './products-search/products-search.component';
import { CartEffects } from './cart.effects';

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
    CreateOrderPaymentComponent,
    OrderDetailsComponent,
    OrdersComponent,
    ProductsSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CookieModule.forRoot(),
    NgbModule,
    HttpClientModule,
    NgxPaginationModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('products', productsReducer),
    StoreModule.forFeature('cart', cartReducer),
    // EffectsModule.forRoot([]),
    EffectsModule.forRoot([ProductsEffects])
    // EffectsModule.forFeature([CartEffects])
  ],
  providers: [CartService, OrderService, HttpRequestService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
