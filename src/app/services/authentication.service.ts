import { Injectable, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Preferences } from '@capacitor/preferences';
const TOKEN_KEY = 'token-saya';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  token = '';
  constructor(private http: HttpClient) {
    this.loadToken();
   }
   async loadToken() {
    const token = await Preferences.get({ key: TOKEN_KEY});
  if (token && token.value)
  console.log('set token: ', token.value);
  this.token = token.value;
  this.isAuthenticated.next(true);
   }
   else {
    this.isAuthenticated.next(false);
   }

   apiURL() {
    return "http://localhost/backend/";
   }

   logout() {
    this.cleardata();
   }
}


