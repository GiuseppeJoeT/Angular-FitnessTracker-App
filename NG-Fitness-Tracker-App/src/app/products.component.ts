import { Component } from '@angular/core';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./app.component.css']
})

export class ProductsComponent {
    productName = 'A book';
    isDisabled = true;

    constructor() {
        setTimeout(() => {
            // this.productName = 'A Tree';
            // Property binding
            this.isDisabled = false;
        }, 3000);
    }
}
