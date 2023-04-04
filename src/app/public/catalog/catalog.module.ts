import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { SharedModule } from "../../shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [
    CatalogPageComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    CatalogRoutingModule,
  ],
})
export class CatalogModule { }
