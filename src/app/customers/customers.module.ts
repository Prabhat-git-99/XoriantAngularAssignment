import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { SingleProductComponent } from './single-product/single-product.component';



@NgModule({
  declarations: [
    CustomersComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CartComponent,
    CheckoutComponent,
    LoginComponent,
    SingleProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CustomersModule { }
