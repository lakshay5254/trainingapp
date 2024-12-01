import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isAuthenticated = this.isUserAuthenticated();
      if (!isAuthenticated) {
        this.router.navigate(['/login']); // Redirect to login page if not authenticated
      }
      return isAuthenticated;
  }

  private isUserAuthenticated(): boolean {
    // Replace with real authentication logic
    return !!localStorage.getItem('token');
  }

}
