import { Injectable } from '@angular/core'; 
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
       if (this.auth.isSignedIn() === true) {
            return true;
        } else {
            this.router.navigate(['./']);
        } 
    } 
}  