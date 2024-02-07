import { Component } from '@angular/core';
import { FiltersComponent } from './filters/filters.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bookstore-app',
  standalone: true,
  imports: [FiltersComponent, ProductListComponent, CommonModule],
  templateUrl: './bookstore-app.component.html',
  styleUrl: './bookstore-app.component.css'
})
export class BookstoreAppComponent {

}
