import { Component, Input } from '@angular/core';
import { Produto } from '../model/Produto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {

  @Input()
  livro!: Produto

  constructor() { }

  ngOnInit(): void {

  }
}
