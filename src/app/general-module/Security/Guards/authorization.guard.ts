import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { BlockUiServiceService } from '../../Services/block-ui-service.service';
import { JwtServiceService } from '../../Services/jwt-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationGuard implements CanActivate, CanActivateChild {
  constructor(
    private blockUI: BlockUiServiceService,
    private jwtService: JwtServiceService
  ) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute, state);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    if (sessionStorage.getItem('acces_token')) {
      console.log('Token no expirado');

      if (this.jwtService.tokenExpired()) {
        console.log('Token expirado');
        window.location.href = '/client/login';
        //this.blockUI.unblock();
        return false;
      }

      if(state.url.split('/').includes('signup')){
        window.location.href = '/news';
        return false;
      }

      if(state.url.split('/').includes('login')){
        window.location.href = '/news';
        return false;
      }


      return true;

    } else {
      //this.blockUI.unblock();
      //window.location.href = '/client/login';

      if(state.url.split('/').includes('signup')){
        return true;
      }

      if(state.url.split('/').includes('login')){
        return true;
      }

      return false;
    }
  }
}
