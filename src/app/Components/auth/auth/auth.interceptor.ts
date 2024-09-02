import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { exhaustMap, Observable, take } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable({providedIn:'root'})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _AuthService:AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return  this._AuthService.user.pipe(
      take(1),
      exhaustMap(user =>{

        if (!user || !user.token) {
          return next.handle(request)
        }
        const modifireRes =request.clone(
      //     {
      //   params: new HttpParams().set('auth' , user.token )
      // }
    )
    return next.handle(modifireRes);
  }
    )
  )
  }
}
