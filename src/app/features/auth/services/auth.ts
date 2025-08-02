import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap, throwError } from "rxjs";
import { AuthResponse } from "../models/AuthResponse.model";
import { LoginData } from "../models/LoginData.model";
import { RegisterData } from "../models/RegisterData.model";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private static apiUrl = "http://localhost:8000/api/auth";
  private tokenKey: string = "authToken";

  constructor(private http: HttpClient, private router: Router) {}

  login(loginModel: LoginData): Observable<any> {
    return this.http
      .post<AuthResponse>(`${AuthService.apiUrl}/login`, loginModel, {
        observe: "response",
      })
      .pipe(
        tap((response) => {
          this.setToken(response.body?.token || "");
          this.router.navigate(["/user-dashboard"]);
        }),
        catchError(this.handleError)
      );
  }

  register(registerModel: RegisterData): Observable<any> {
    const registerInfo = {
      name: registerModel.name,
      lastname: registerModel.lastname,
      email: registerModel.email,
      password: registerModel.password,
    };

    return this.http
      .post<AuthResponse>(`${AuthService.apiUrl}/register`, registerInfo, {
        observe: "response",
      })
      .pipe(
        tap((response) => {
          this.setToken(response.body?.token || "");
          this.router.navigate(["/user-dashboard"]);
        }),
        catchError(this.handleError)
      );
  }

  isAuthenticated(): Observable<boolean> {
    return this.http
      .get<boolean>(`${AuthService.apiUrl}/is-token-valid`, {
        params: { token: this.getToken() },
      })
      .pipe(
        catchError((err) => {
          return of(false);
        })
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = "";

    switch (error.status) {
      case 400:
        errorMessage = error.error.message;
        break;
      case 401:
        errorMessage = "No autorizado";
        break;
      case 404:
        errorMessage = "Usuario no encontrado";
        break;
      case 500:
        errorMessage = "Error interno del servidor";
        break;
      default:
        errorMessage =
          error.error?.message ||
          "Error desconocido intentalo de nuevo más tarde";
    }

    return throwError(() => new Error(errorMessage));
  }

  logOut(): void {
    this.removeToken();
    this.router.navigate([""]);
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
