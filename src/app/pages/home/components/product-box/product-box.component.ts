import { Component, Input, OnInit } from "@angular/core";
import { Product } from "src/app/models/product.model";

@Component({
  selector: "app-product-box",
  templateUrl: "./product-box.component.html",
  styles: [],
})
export class ProductBoxComponent implements OnInit {
  @Input()
  fullWidthMode = false;
  product: Product | undefined = {
    id: 1,
  title: string;
  price: number;
  description: string;
  };

  constructor() {}

  ngOnInit(): void {}

  onAddToCart(): void {}
}
