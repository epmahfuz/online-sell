import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient,) { }

  addProduct(payload: any): Observable<any> {
    return this.http.post(
      `${environment.BusinessService}/product/add`, 
      payload
    );
  }

  getAllProduct() {
    return this.http.get(
      `${environment.BusinessService}/product/getAll`
    );
  }

}
