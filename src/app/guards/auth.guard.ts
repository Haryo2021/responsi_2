import { AuthenticationService } from '../services/authentication.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { from, Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthenticationService, private router: Router)
  {}
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> {
      return this.authService.isAuthenticated.pipe(
        filter((val) => val !== null),
        take(1),
        map(isAuthenticated) => {
          if (isAuthenticated) {
            return true;            
          } else {
            this.router.navigateByUrl('/');
            console.log('Login Terlebih dahulu');
            return false;
          }
        }
      );
    }
}
