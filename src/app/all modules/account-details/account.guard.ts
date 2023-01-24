import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountGuard implements CanActivate {
  constructor(public router: Router) {}
  session_id: any = JSON.parse(localStorage.getItem('session_details')!);
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.session_id == null) {
      return true;
    } else {
      this.router.navigate(['/movies']);
      return false;
    }
  }
}
