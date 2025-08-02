import { Inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class TokenService {
  private tokenKey: string = "authToken";

  constructor(private router: Router) {}

  logOut(): void {
    this.removeToken();
    this.router.navigate(["/auth"]);
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string {
    return localStorage.getItem(this.tokenKey) || "";
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
