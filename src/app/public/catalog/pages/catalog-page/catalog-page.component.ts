import { Component, OnInit } from '@angular/core';
import {CatalogService} from "@app/public/catalog/services/catalog.service";
import {Observable, Subscription} from "rxjs";
import {Product} from "@app/public/catalog/models/product";
import {Store} from "@ngxs/store";
import {AddProductToCart} from "@app/app.actions";

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent implements OnInit {

  constructor(
    private catalogService: CatalogService,
    private store: Store,
  ) { }

  products$?: Observable<Product[]>;

  ngOnInit(): void {
    this.products$ = this.catalogService.getCatalog();
  }

  categorySelected(categoryId: number): void {
    this.products$ = this.catalogService.getCatalogByCategoryId(categoryId);
  }

  addProductToCart(id: number) {
    this.store.dispatch(new AddProductToCart(id)).subscribe();
  }
}
