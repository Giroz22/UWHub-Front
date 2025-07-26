import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../../features/auth/services/auth";

@Injectable({
  providedIn: "root",
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = this.authService.getToken();

    // Clone the request and add the authorization header if a token exists
    if (authToken) {
      // You can specify the header name. 'Authorization' is standard for tokens.
      // 'Bearer' is the common scheme for JWTs.
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      return next.handle(clonedRequest);
    }

    // If no token, just pass the original request through
    return next.handle(req);
  }
}
