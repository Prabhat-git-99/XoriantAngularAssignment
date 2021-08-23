import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public product:Product[ ] = [ ];
  grandTotal !: number;

  constructor( private cartService: CartService ) { }

  ngOnInit(): void {
  
    this.cartService.getProducts( )
    .subscribe( res => {

      this.product = res;
      console.log('aaa ', this.product );
      this.grandTotal = this.cartService.getTotalPrice( );
    })
  }


  removeItem( item:any ) {

    if ( item.itemQuantity >= 2 ) {

      item.itemQuantity -= 1;
      // this.cartService.removeCartItem( item );
      this.grandTotal = this.cartService.getTotalPrice( );

    }
    else {
      this.cartService.removeCartItem( item );
      this.grandTotal = this.cartService.getTotalPrice( );
    }


  }

  addItem( item:any ) {

    if ( item.quantity > item.itemQuantity ) {

      item.itemQuantity += 1;
      this.grandTotal = this.cartService.getTotalPrice( );
      // this.cartService.removeCartItem( item );

    }


  }

  emptyCart( ) {

    this.cartService.removeAll( );
    this.grandTotal = this.cartService.getTotalPrice( );

  }

  



}
