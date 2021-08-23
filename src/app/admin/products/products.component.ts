import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[ ] = [ ];
  currentData:Product[ ] = [ ];
  currentPage:number = 0;
  totalPage:number = 1;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.productService.fetchAllProduct().subscribe(
      products => {

        this.products = products
        this.totalPage = Math.ceil(products.length/10)
        this.currentData = this.products.slice(0, (this.currentPage + 1)*10);
      
      }

    )

  }



  delProduct(id:number):void {

    this.productService.deleteProduct(id).subscribe(() => {

      this.products = this.products.filter( p => p.id !== id );
      let total = this.totalPage;
      this.totalPage = Math.ceil(this.products.length / 10 );
      if ( this.currentPage === total ) {
        this.currentPage = this.totalPage;
        this.currentData = this.products.slice((this.currentPage)*10, (this.currentPage)*10 + 10);
      }
      else {
        this.currentData = this.products.slice((this.currentPage)*10, (this.currentPage)*10 + 10);
      }

    })

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

}
