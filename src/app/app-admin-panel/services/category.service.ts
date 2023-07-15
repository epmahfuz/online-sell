import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private organizationId= 'dfs';
  private branchId ='refdf';

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
