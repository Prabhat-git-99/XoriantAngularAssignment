import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { ProductEditComponent } from "../admin/product-edit/product-edit.component";

@Injectable()
export class EditProductDeactivateGuardService implements CanDeactivate<ProductEditComponent> {

    canDeactivate( component: ProductEditComponent ):boolean {

        console.log( ProductEditComponent );
        console.log( 'see ', component.editProductForm.submitted );
        if ( component.editProductForm.submitted === true ) {
            return true;
        }
        else if ( component.editProductForm.dirty ) {
            return confirm('Are you sure you want to discard changes?');
        }   
        else {
            return true;
        }
    } 
}