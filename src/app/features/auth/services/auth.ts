import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap, throwError } from "rxjs";
import { AuthResponse } from "../models/AuthResponse.model";
import { LoginData } from "../models/LoginData.model";
import { RegisterData } from "../models/RegisterData.model";
import { Router } from "@angular/router";
import { TokenService } from "../../../shared/services/token.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private static apiUrl = "http://localhost:8000/api/auth";

  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenService: TokenService
  ) {}

  login(loginModel: LoginData): Observable<any> {
    return this.http
      .post<AuthResponse>(`${AuthService.apiUrl}/login`, loginModel, {
        observe: "response",
      })
      .pipe(
        tap((response) => {
          this.tokenService.setToken(response.body?.token || "");
          this.router.navigate(["/dashboard"]);
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
          this.tokenService.setToken(response.body?.token || "");
          this.router.navigate(["/dashboard"]);
        }),
        catchError(this.handleError)
      );
  }

  isAuthenticated(): Observable<boolean> {
    return this.http
      .get<boolean>(`${AuthService.apiUrl}/is-token-valid`, {
        params: { token: this.tokenService.getToken() },
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
}
