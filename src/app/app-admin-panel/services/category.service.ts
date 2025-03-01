import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

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
  
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
  ) { }

  getAuthorizedHeader(){
    const token = this.cookieService.get('authToken');
    var options = {
      headers:{
        Authorization: `Bearer ${token}`,
      },
    };
    return options;
  }

  addProduct(payload: any): Observable<any> {
    return this.http.post(
      `${environment.BusinessService}/product/add`, 
      payload,
      this.getAuthorizedHeader()
    );
  }
  updateAProduct(payload: any, productId:string) {
    return this.http.patch(
      `${environment.BusinessService}/product/update/${productId}`,
      payload,
      this.getAuthorizedHeader()
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
  getAProduct(productId: string) { 
    return this.http.get(
      `${environment.BusinessService}/product/getAProduct/${productId}`
    );
  }
  archiveAProduct(payload: any, productId:string){
    return this.http.patch(
      `${environment.BusinessService}/product/archive/${productId}`,
      payload,
      this.getAuthorizedHeader()
    );
  }

  // Category Api's - start
  addCategory(payload: any): Observable<any> {
    return this.http.post(
      `${environment.BusinessService}/category/add`, 
      payload,
      this.getAuthorizedHeader()
    );
  }

  getAllCategory() {
    return this.http.get(
      `${environment.BusinessService}/category/getAll`
    );
  }

  getACategory(catId:string) {
    return this.http.get(
      `${environment.BusinessService}/category/get/${catId}`
    );
  }

  updateACategory(payload: any, catId:string) {
    return this.http.patch(
      `${environment.BusinessService}/category/update/${catId}`,
      payload,
      this.getAuthorizedHeader()
    );
  }
  // Category Api's - end

  getAllOrder() {
    return this.http.get(
      `${environment.BusinessService}/order/getAll`,
      this.getAuthorizedHeader()
    );
  }

  updateAOrder(payload: any, orderId:string){
    return this.http.patch(
      `${environment.BusinessService}/order/update/${orderId}`,
      payload,
      this.getAuthorizedHeader()
    );
  }
}
