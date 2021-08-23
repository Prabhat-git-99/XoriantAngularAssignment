import { isNgContent } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  products: Product[ ] = [ ];
  currentData: Product[ ] = [ ];
  filteredData: Product[ ] = [ ];
  allData: Product[ ] = [ ];
  currentPage: number = 0;
  totalPage: number = 1;
  search: string = '';
  filterName: any =  {
      'all-product': false,
      'mobile': false,
      'laptop': false,
      'watch': false
  };


  constructor( private productService: ProductService, private cartService: CartService ) { }

  ngOnInit(): void {

    this.productService.fetchAllProduct( ).subscribe(

      products => {

        this.products = products
        this.products.forEach((a:Product) => {
          Object.assign( a, { itemQuantity:1 });
        });
        this.totalPage = Math.ceil(products.length / 10 );
        this.allData = this.products;
        this.currentData = this.products.slice(0, (this.currentPage + 1)*10);

      }
    )

  }

  nextButton( ) {

    if ( this.currentPage+1 === this.totalPage ) {
      this.currentPage = this.currentPage
    }
    else {
      this.currentPage += 1;
      this.currentData = this.products.slice((this.currentPage)*10, (this.currentPage)*10 + 10);
    }

  }

  prevButton( ) {

    if ( this.currentPage === 0 ) {

      this.currentPage = 0;

    }
    else {
      this.currentPage -= 1;
      this.currentData = this.products.slice((this.currentPage)*10, (this.currentPage)*10 + 10);
    }

  }


  addToCart( product:Product ) {

    this.cartService.addToCart( product );

  }


  // Action / Filter Center

  searchBar( value:any ) {

    console.log( value.target.value );
    this.search = value.target.value;
    if ( this.search === '' ) {

      this.products = this.allData;

    }
    else {

      // this.products = this.allData.filter(obj => Object.values(obj).some(val => val.includes(this.search)));
      const res = this.allData.filter( ( item:any ) =>
            JSON.stringify( item ).toLowerCase( ).includes( this.search.toLowerCase( ) )
      )
      this.products = res;
      this.currentData = this.products.slice(0, 10 );
      
    }

  }

  setFilter( value:any ) {

    let filterValue:string = value.target.value;
    let filterApplied:boolean = value.target.checked;

    if ( filterApplied ) {

      // this.filterName.push( filterValue );
      this.filterName[filterValue] = true;

    }

    else {

      // this.filterName = this.filterName.filter( item => item !== filterValue );
      this.filterName[filterValue] = false;

    }

    // console.log( this.filterName );

    if ( this.filterName['all-product'] || ( !this.filterName['watch'] && !this.filterName['mobile'] && !this.filterName['laptop'])) {

      // this.allData = this.products;
      this.products = this.allData;
      this.currentData = this.allData.slice(0, (this.currentPage + 1)*10);
      console.log('aaa');

    }

    else {

      this.products = [ ];

      if ( this.filterName['watch'] ) {

        this.products = [...this.products, ...this.allData.filter( item => item.category === 'watch' )];
        this.currentData = this.products.slice( 0, ( this.currentPage + 1)*10 );


      }
      else {

        this.products = this.products.filter( item => item.category !== 'watch' );
        this.currentData = this.products.slice( 0, ( this.currentPage + 1)*10 );

      }
      if ( this.filterName['mobile'] ) {

        this.products = [...this.products, ...this.allData.filter( item => item.category === 'mobile' )];
        this.currentData = this.products.slice( 0, ( this.currentPage + 1)*10 );

      }
      else {

        this.products = this.products.filter( item => item.category !== 'mobile' );
        this.currentData = this.products.slice( 0, ( this.currentPage + 1)*10 );
        
      }
      if ( this.filterName['laptop'] ) {

        this.products = [...this.products, ...this.allData.filter( item => item.category === 'laptop' )];
        this.currentData = this.products.slice( 0, ( this.currentPage + 1)*10 );

      }
      else {

        this.products = this.products.filter( item => item.category !== 'laptop' );
        this.currentData = this.products.slice( 0, ( this.currentPage + 1)*10 );
        
      }

    }

  }

}
