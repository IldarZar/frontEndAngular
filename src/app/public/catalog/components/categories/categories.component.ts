import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CatalogService} from "../../services/catalog.service";
import {Observable} from "rxjs";
import {Category} from "../../models/category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  categories$!: Observable<Category[]>;

  selectedCategoryId!: null | number;

  @Output()
  categorySelected = new EventEmitter();

  constructor(
    private catalogService: CatalogService,
  ) { }

  ngOnInit(): void {
    this.categories$ = this.catalogService.getCategories();
  }

  selectCategory(categoryId: number): void {
    this.selectedCategoryId = this.selectedCategoryId === categoryId ? null : categoryId;

    this.categorySelected.emit(this.selectedCategoryId);
  }
}
