import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLoginComponent } from './customer-login.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

describe('CustomerLoginComponent', () => {
  let component: CustomerLoginComponent;
  let fixture: ComponentFixture<CustomerLoginComponent>;

  let router:any = Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerLoginComponent ],
      imports: [  HttpClientTestingModule ,RouterTestingModule.withRoutes([]), ReactiveFormsModule ],
      providers: [  FormBuilder ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerLoginComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('login navigation test', () => {
    const spy = spyOn(router, 'navigate');
    component.navigateToHome();
    expect(spy.calls.first().args[0]).toContain('/');
  });

});
