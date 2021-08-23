import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';

import { SingleProductComponent } from './single-product.component';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';


describe('SingleProductComponent', () => {
  let component: SingleProductComponent;
  let fixture: ComponentFixture<SingleProductComponent>;

  let route: ActivatedRoute; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleProductComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [HttpClient,{ provide: ActivatedRoute,  
        useValue: 
         {
          snapshot: {
                  params: {
                           'id': 1
                           }
                     }
         }
     }],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProductComponent);
    route = TestBed.inject(ActivatedRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getDataByID test case ', () => {
    route.snapshot.params.id = 1;
    // route.snapshot.params.name = 'testParamChanged';
    fixture = TestBed.createComponent(SingleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // expect(component.name).toBe('testParamChanged');
    expect(component.id).toBe(1);
    });

});
