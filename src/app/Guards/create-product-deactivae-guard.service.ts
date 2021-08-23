import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { ProductCreateComponent } from "../admin/product-create/product-create.component";

@Injectable()
export class CreateProductDeactivateGuardService implements CanDeactivate<ProductCreateComponent> {

    canDeactivate( component: ProductCreateComponent ): boolean {

        if ( component.createProductForm.submitted === true ) {
            return true;
        }
        else if ( component.createProductForm.dirty ) {
            return confirm('Are you sure you want to discard changes!');
        }
        else {

            return true;
        }
    }
}