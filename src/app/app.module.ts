import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CustomersModule } from './customers/customers.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateProductDeactivateGuardService } from './Guards/create-product-deactivae-guard.service';
import { EditProductDeactivateGuardService } from './Guards/edit-product-deactivate-guard.service';
import { AuthGuardAdminService } from './Guards/auth-guard-admin.service';
import { AuthGuardCustomerService } from './Guards/auth-guard-customer.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    CustomersModule,
    AuthModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CreateProductDeactivateGuardService, EditProductDeactivateGuardService, AuthGuardAdminService, AuthGuardCustomerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
