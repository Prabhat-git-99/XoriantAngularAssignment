import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/products/product.service';
// import Validation from 'util'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})

export class ProductEditComponent implements OnInit {
  
  @ViewChild ('editForm') public editProductForm !: NgForm;

  form: FormGroup;
  id: number;
  image:string = '';
  submitted:boolean = false;
 
  constructor(private formBuilder: FormBuilder, private productService: ProductService, private route: ActivatedRoute, private router: Router) {

    this.form = this.formBuilder.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20)
        ]
      ],
      image:  ['', Validators.required],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(15),
          Validators.maxLength(180)
        ]
      ],
      quantity: [ 0, [ Validators.required, Validators.min(0) ] ],
      price: [ 0, [ Validators.required, Validators.min(0) ]],
    })

    this.id = this.route.snapshot.params.id;
    this.productService.getSingleProduct(this.id).subscribe( product => {
      this.form.patchValue(product);
      this.image = product.image
    })


  }

  ngOnInit(): void {
  }

  submit( ): void {

    this.submitted = true;
    console.log(this.form);
    if (this.form.invalid) {
      console.log('hii')
      return;
    }


    console.log(JSON.stringify(this.form.value, null, 2));

    this.productService.updateProduct(this.id, this.form.getRawValue()).subscribe(
      () => {
        this.router.navigate(['/admin/products'])
      }
    )

  }

}
