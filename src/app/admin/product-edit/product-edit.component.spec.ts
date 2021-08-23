import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductEditComponent } from './product-edit.component';

describe('ProductEditComponent', () => {
  let component: ProductEditComponent;
  let fixture: ComponentFixture<ProductEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEditComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule, FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('title field validity', () => {
    let title = component.form.controls['title'];
    expect(title.valid).toBeFalsy();
  });

  it('submitting a valid form ', () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls['title'].setValue("12345");
    component.form.controls['description'].setValue("a good description goes here");
    component.form.controls['image'].setValue("http://photo.jpg");
    component.form.controls['price'].setValue(100);
    component.form.controls['quantity'].setValue(2);
    expect(component.form.valid).toBeTruthy();
  });


  
  it('submitting a invalid form ', () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls['title'].setValue("1");
    component.form.controls['description'].setValue("a good description goes here");
    component.form.controls['image'].setValue("http://photo.jpg");
    component.form.controls['price'].setValue(100);
    component.form.controls['quantity'].setValue(2);
    expect(component.form.valid).toBeFalsy();
  });

});