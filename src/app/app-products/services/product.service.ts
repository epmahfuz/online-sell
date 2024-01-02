import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public $cartViewChange = new Subject<boolean>();
  public $selectedCategoryId = new Subject<{ key: string, value: string }>();
  private organizationId= 'dfs';
  private branchId ='refdf';

  constructor(
    private http: HttpClient,
  ) { }
  
  public options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      ApiKey: `${environment.ApiKey}`,
      TenantId: `${environment.TenantId}`,
      OrganizationId: `${this.organizationId}`,
      BranchId: `${this.branchId}`,
    }),
    withCredentials: true,
  };
  
  addOrder(payload: any): Observable<any> {
    return this.http.post(
      `${environment.BusinessService}/order/add`, 
      payload
    );
  }

  getAllProduct() { 
    return this.http.get(
      `${environment.BusinessService}/product/getAll`
    );
  }
  
  getProductByCategoryId(categoryId: string) { 
    return this.http.get(
      `${environment.BusinessService}/product/getByCategoryId/${categoryId}`
    );
  }
  
  addCategory(payload: any): Observable<any> {
    return this.http.post(
      `${environment.BusinessService}/category/add`, 
      payload
    );
  }

  getAllCategory() {
    return this.http.get(
      `${environment.BusinessService}/category/getAll`
    );
  }
}
