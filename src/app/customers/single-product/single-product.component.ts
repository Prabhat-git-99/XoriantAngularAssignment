import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterStateSnapshot } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  product:Product = {
    title: '',
    category: '',
    description: '',
    price: 0,
    quantity: 0,
    itemQuantity: 1,
    image: '',
    id: 0
  };
  public id:number;

  constructor( private singleProduct: ProductService, private route: ActivatedRoute, private router: Router, private cartService: CartService ) { 

    // this.name = this.route.snapshot.paramMap.get('name');
    this.id = this.route.snapshot.params.id;
    this.singleProduct.getSingleProduct(this.id).subscribe( product => {
      this.product = product;
      this.product.itemQuantity = 1;
      console.log( 'see product ', this.product );

    })


  }

  ngOnInit(): void {
  }

  addToCart( product:Product ) {

    this.cartService.addToCart( product );
    console.log('cliced ', product);
    this.router.navigate(['/cart']);

  }

}
