import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  @ViewChild('createForm') public createProductForm!: NgForm

  public title:string = '';
  image:string = '';
  description:string = '';
  quantity:number = 0;
  price:number = 0;

  constructor(private productService: ProductService, private router: Router ) {  }

  ngOnInit(): void {
  
  }

  submit( form:any, crForm:any ) {

    
    console.log( 'hii ', this.title, form, crForm );
    if ( crForm.form.status === "VALID" ) {

      const data = {

        title: form.title,
        image: form.image,
        description: form.description,
        quantity: form.quantity,
        price: form.price
  
      }
  
      this.productService.createProduct( data ).subscribe( ( ) => {
  
        this.router.navigate(['/admin/products'])
        
      } )
  
    }

    else {
      alert( 'Please fill form carefully!')
    }
    
  }


}
