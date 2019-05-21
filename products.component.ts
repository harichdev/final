import { Component, OnInit } from '@angular/core';
import { sampleProducts, products } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public gridData: any[] ;
  constructor() { }

  ngOnInit() {
      this.gridData = products ;
  }

}
