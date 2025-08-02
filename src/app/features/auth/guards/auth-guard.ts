import { CanActivateFn, Router, UrlTree } from "@angular/router";
import { AuthService } from "../services/auth";
import { inject } from "@angular/core";
import { map, Observable } from "rxjs";
import { TokenService } from "../../../shared/services/token.service";

export const authGuard: CanActivateFn = (
  route,
  state
): Observable<boolean | UrlTree> => {
  const service = inject(AuthService);
  const tokenService = inject(TokenService);
  const router = inject(Router);

  return service.isAuthenticated().pipe(
    map((isTokenValid: Boolean) => {
      if (!isTokenValid) {
        tokenService.removeToken();
        return router.createUrlTree(["/auth"]);
      }

      return true;
    })
  );
};
