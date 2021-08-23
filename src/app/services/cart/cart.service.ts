import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList:Product[ ] = [ ];
  public productList = new BehaviorSubject<any>([ ]);
  apiUrl = 'http://localhost:3000/orders';

  constructor( private http: HttpClient ) { }

  getProducts( ) {

    return this.productList.asObservable( );

  }



  setProducts( product: Product ) {

    this.cartItemList.push( ...this.cartItemList, product ); 
    this.productList.next(product);

  }

  addToCart( product: Product ) {

    let item = this.cartItemList.find( item => item.id === product.id );

    if ( item ) {
  
      this.cartItemList.find( item => {
        if ( item.id === product.id ) {

          item.itemQuantity += 1;

        }
      })

      this.productList.next( this.cartItemList );
      this.getTotalPrice( );

      console.log( this.cartItemList );

    }
      
    else {

      this.cartItemList.push( product );
      this.productList.next( this.cartItemList );
      this.getTotalPrice( );
      console.log( this.cartItemList );
  
    }

  }

  getTotalPrice( ):number {

    let grandTotal = 0;
    this.cartItemList.map( ( item:Product ) => {

      grandTotal += item.price*item.itemQuantity;

    })

    return grandTotal;
    

  }

  removeCartItem( product:Product ) {

    this.cartItemList.map( ( item:Product, index: any ) => {

      if ( product.id === item.id ) {

        this.cartItemList.splice( index, 1 );

      }

    })
    this.productList.next( this.cartItemList );

  }


  removeAll( ) {

    this.cartItemList = [ ];
    this.productList.next( this.cartItemList );
  }


}
