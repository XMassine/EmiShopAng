import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";


export class AutInterCepter implements HttpInterceptor{
  constructor(private router:Router, private authService:AuthService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isAuth=this.authService.isAuth()
    if(isAuth){
      const authreq=req.clone({

      })
      return next.handle(authreq)
    }
    return next.handle(req)
  }

}
