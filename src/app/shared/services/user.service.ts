import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { catchError, of } from "rxjs";
import { UserModel } from "../models/user.model";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private http = inject(HttpClient);

  private _user = signal<UserModel>({
    name: "",
    lastname: "",
    email: "",
    dateOfBirth: "",
    profilePictureUrl: "",
    athlete: "",
    coach: "",
    judge: "",
  });

  readonly user = this._user;

  private _loading = signal(false);
  readonly loading = this._loading;

  private _error = signal<string | null>(null);
  readonly error = this._error;

  private static apiUrl = "http://localhost:8000/api/user-details";

  constructor() {}

  getUserData() {
    this.loading.set(true);
    this.error.set(null);

    this.http
      .get<UserModel>(UserService.apiUrl + "/find-me")
      .pipe(
        catchError((error) => {
          this.error.set(error.message);
          return of(null);
        })
      )
      .subscribe((user) => {
        if (!user) {
          this.error.set("Error fetching user data");
        } else {
          this.user.set(user);
        }
        this.loading.set(false);
      });
  }
}
