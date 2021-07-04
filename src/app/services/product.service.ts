import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../common/product";
import {Observable} from "rxjs";
// this is for reactive javascript: rxjs
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Spring Boot Rest api
  private baseUrl = "http://localhost:8080/api/products";

  constructor(private httpClient: HttpClient) {
  }

  // httpClient.get(....)
  //    has two args, url and optional, optional can be like following.
  // options: {
  //     ...
  //     observe?: 'body' | 'events' | 'response',
  //     ...
  //     responseType?: 'arraybuffer'|'blob'|'json'|'text',
  //     ...
  //   }
  getProductList(): Observable<Product[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}

// URL: https://angular.io/guide/http at HTTP client has explanation.
//            here GetReponse interface is actually a object definition.`
//     Observable<Type>, type of data in response body.
//          ResponseType: here is
// this is tough part, I am not sure how this works out.
interface GetResponse {
  _embedded: {
    products: Product[];
  }
}
