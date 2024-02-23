import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUserSubject = new BehaviorSubject<any>(null);
  loggedInUser$ = this.loggedInUserSubject.asObservable();

  constructor(
    private cookieService: CookieService,
  ) {}


  doLoggedIn(token:string, user: any){
    this.setTokenInCookie(token);
    this.setLoggedInUser(user);
  }

  doLoggedOut(){
    this.deleteTokenInCookie();
    this.clearLoggedInUser();
  }

  setTokenInCookie(token: string) {
    this.cookieService.set('authToken', token);
  }

  deleteTokenInCookie(){
    this.cookieService.delete('authToken');
  }

  setLoggedInUser(user: any) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    console.log("user: ", user);
    this.loggedInUserSubject.next(user);
  }

  getLoggedInUser() {
    return this.loggedInUserSubject.value;
  }

  clearLoggedInUser() {
    localStorage.removeItem("loggedInUser");
    this.loggedInUserSubject.next(null);
  }

  isLoggedIn() {
    return !!this.getLoggedInUser();
  }
}
