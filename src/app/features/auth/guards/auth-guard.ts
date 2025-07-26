import { CanActivateFn, Router, UrlTree } from "@angular/router";
import { AuthService } from "../services/auth";
import { inject } from "@angular/core";
import { map, Observable } from "rxjs";

export const authGuard: CanActivateFn = (
  route,
  state
): Observable<boolean | UrlTree> => {
  const service = inject(AuthService);
  const router = inject(Router);

  return service.isAuthenticated().pipe(
    map((isTokenValid: Boolean) => {
      if (!isTokenValid) {
        service.removeToken();
        return router.createUrlTree(["/auth"]);
      }

      return true;
    })
  );
};
