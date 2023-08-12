import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
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

  addAnonymousUser(payload:any): Observable<any>{
    return this.http.post(
      `${environment.BusinessService}/users/addAnonymousUser`, 
      payload
    );
  }

  logIn(payload: any): Observable<any>{
    return this.http.post(
      `${environment.BusinessService}/access-control/login`,
      payload
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
