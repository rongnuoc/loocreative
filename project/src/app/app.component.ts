import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  public menu: string[] = ["INTRODUCTION", "SOLUTION", "RATE PLAN", "LOG IN", "APPLY FOR FREE USE"];
  public toggle = true;

  public data = {
    bestProduct: [
      {
        name: "Product 1",
        tagNumber: "01",
        srcImg: "../assets/images/product-1.PNG",
        description: "How to create mobile-optimized",
      },
      {
        name: "Product 2",
        tagNumber: "02",
        srcImg: "../assets/images/product-2.PNG",
        description: "How to create mobile-optimized",
      },
      {
        name: "Product 3",
        tagNumber: "03",
        srcImg: "../assets/images/product-3.PNG",
        description: "How to create mobile-optimized",
      },
    ],
    products:[
      {
        name: "Product 1",
        price: 2500,
        favorite: 236,
        tagNumber: "01",
        srcImg: "../assets/images/product-4.PNG",
        description: "How to create mobile-optimized",
      },
      {
        name: "Product 1",
        price: 2500,
        favorite: 236,
        tagNumber: "01",
        srcImg: "../assets/images/product-4.PNG",
        description: "How to create mobile-optimized",
      },
      {
        name: "Product 1",
        price: 2500,
        favorite: 236,
        tagNumber: "01",
        srcImg: "../assets/images/product-5.PNG",
        description: "How to create mobile-optimized",
      },
      {
        name: "Product 1",
        price: 2500,
        favorite: 236,
        tagNumber: "01",
        srcImg: "../assets/images/product-2.PNG",
        description: "How to create mobile-optimized",
      },
      {
        name: "Product 1",
        price: 2500,
        favorite: 236,
        tagNumber: "01",
        srcImg: "../assets/images/product-3.PNG",
        description: "How to create mobile-optimized",
      },
      {
        name: "Product 1",
        price: 2500,
        favorite: 236,
        tagNumber: "01",
        srcImg: "../assets/images/product-5.PNG",
        description: "How to create mobile-optimized",
      },
      {
        name: "Product 1",
        price: 2500,
        favorite: 236,
        tagNumber: "01",
        srcImg: "../assets/images/product-3.PNG",
        description: "How to create mobile-optimized",
      },
      {
        name: "Product 1",
        price: 2500,
        favorite: 236,
        tagNumber: "01",
        srcImg: "../assets/images/product-2.PNG",
        description: "How to create mobile-optimized",
      },
      {
        name: "Product 1",
        price: 2500,
        favorite: 236,
        tagNumber: "01",
        srcImg: "../assets/images/product-4.PNG",
        description: "How to create mobile-optimized",
      },
      {
        name: "Product 1",
        price: 2500,
        favorite: 236,
        tagNumber: "01",
        srcImg: "../assets/images/product-1.PNG",
        description: "How to create mobile-optimized",
      },
      {
        name: "Product 1",
        price: 2500,
        favorite: 236,
        tagNumber: "01",
        srcImg: "../assets/images/product-2.PNG",
        description: "How to create mobile-optimized",
      },
      {
        name: "Product 1",
        price: 2500,
        favorite: 236,
        tagNumber: "01",
        srcImg: "../assets/images/product-5.PNG",
        description: "How to create mobile-optimized",
      },
      {
        name: "Product 1",
        price: 2500,
        favorite: 236,
        tagNumber: "01",
        srcImg: "../assets/images/product-3.PNG",
        description: "How to create mobile-optimized",
      },
      {
        name: "Product 1",
        price: 2500,
        favorite: 236,
        tagNumber: "01",
        srcImg: "../assets/images/product-4.PNG",
        description: "How to create mobile-optimized",
      },
      {
        name: "Product 1",
        price: 2500,
        favorite: 236,
        tagNumber: "01",
        srcImg: "../assets/images/product-5.PNG",
        description: "How to create mobile-optimized",
      },
    ],
    brands: [
      {
        name: "Brand A",
        srcImg: "../assets/images/brand-1.PNG"
      },
      {
        name: "Brand B",
        srcImg: "../assets/images/brand-2.PNG"
      },
      {
        name: "Brand C",
        srcImg: "../assets/images/brand-3.png"
      },
      {
        name: "Brand D",
        srcImg: "../assets/images/brand-4.png"
      },
      {
        name: "Brand E",
        srcImg: "../assets/images/brand-5.png"
      },
    ]
  }
}
