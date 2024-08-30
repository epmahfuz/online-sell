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

  constructor(
    private http: HttpClient,
  ) { }

  signIn(payload: any): Observable<any>{
    return this.http.post(
      `${environment.BusinessService}/access-control/login`,
      payload
    );
  }

  signUp(payload:any): Observable<any>{
    return this.http.post(
      `${environment.BusinessService}/users/addAnonymousUser`, 
      payload
    );
  }

}
