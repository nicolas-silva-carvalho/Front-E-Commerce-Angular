import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../components/bookstore-app/product-list/model/Produto';

@Injectable({
  providedIn: 'root',
})

export class ProductListService {

constructor(private http: HttpClient) { }

  private url = 'https://localhost:7081/api/Livraria';

  httpOptions = {
    Headers: new HttpHeaders({'content-type': 'application/json'})
  }

  public getProdutos() {
    return this.http.get(this.url);
  }
}
