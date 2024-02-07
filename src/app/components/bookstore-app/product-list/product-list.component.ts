import { Component } from '@angular/core';
import { ProductListService } from '../../../Services/Product-List.service';
import { CommonModule } from '@angular/common';
import { Produto } from './model/Produto';
import { ProductItemComponent } from './product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  livros: any;
  bookService : ProductListService;

  constructor( bookService: ProductListService ) {
    this.bookService = bookService;
  }

  ngOnInit(): void {
    this.livros = this.bookService.getProdutos().subscribe((data => {
      this.livros = data;
      console.log(this.livros);
    }));
  }
}
