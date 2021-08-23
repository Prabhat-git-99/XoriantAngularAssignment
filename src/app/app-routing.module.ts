import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ProductCreateComponent } from './admin/product-create/product-create.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { ProductsComponent } from './admin/products/products.component';
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { CustomerLoginComponent } from './auth/customer-login/customer-login.component';
import { CartComponent } from './customers/cart/cart.component';
import { CheckoutComponent } from './customers/checkout/checkout.component';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './customers/home/home.component';
import { LoginComponent } from './customers/login/login.component';
import { SingleProductComponent } from './customers/single-product/single-product.component';
import { AuthGuardAdminService } from './Guards/auth-guard-admin.service';
import { AuthGuardCustomerService } from './Guards/auth-guard-customer.service';
import { CreateProductDeactivateGuardService } from './Guards/create-product-deactivae-guard.service';
import { EditProductDeactivateGuardService } from './Guards/edit-product-deactivate-guard.service';

const routes: Routes = [

  {
    path: '',
    component: CustomersComponent,
    children: [
      
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'login',
        component: CustomerLoginComponent
      },
      {
        path: 'cart',
        component: CartComponent,
        canActivate: [ AuthGuardCustomerService ]
      },
      {
        path: 'cart/checkout',
        component: CheckoutComponent,
        canActivate: [ AuthGuardCustomerService ]
      },
      {
        path: 'product/:id',
        component: SingleProductComponent
      }
      
    ]
  },
  
  {
    path: 'admin',
    component: AdminComponent,

    // component: AdminLoginComponent,
    children: [
      {
        path: 'login',
        component: AdminLoginComponent
      },
      {
        path: 'products',
        component: ProductsComponent,
        canActivate: [ AuthGuardAdminService ]
      },
      {
        path: 'products/:id/edit',
        component: ProductEditComponent,
        canDeactivate: [ EditProductDeactivateGuardService ],
        canActivate: [ AuthGuardAdminService ]
      },
      {
        path: 'products/product-create',
        component: ProductCreateComponent,
        canDeactivate: [ CreateProductDeactivateGuardService ],
        canActivate: [ AuthGuardAdminService ]
      }
    ]
  },
  {
    path: 'login',
    component: CustomerLoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
