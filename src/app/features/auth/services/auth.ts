import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { AuthResponse } from "../models/AuthResponse.model";
import { LoginData } from "../models/LoginData.model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private static apiUrl = "http://localhost:8000/api/auth";

  constructor(private http: HttpClient) {}

  login(loginModel: LoginData): Observable<any> {
    return this.http
      .post<AuthResponse>(`${AuthService.apiUrl}/login`, loginModel, {
        observe: "response",
      })
      .pipe(
        tap((response) => {
          localStorage.setItem("token", response.body?.token || "");
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = "";

    switch (error.status) {
      case 400:
        errorMessage = "Informacion inválida: " + error.error.message;
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
