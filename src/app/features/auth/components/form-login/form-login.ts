import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { AuthService } from "../../services/auth";
import { LoginData } from "../../models/LoginData.model";

@Component({
  selector: "app-form-login",
  imports: [ReactiveFormsModule],
  templateUrl: "./form-login.html",
  styleUrl: "./form-login.scss",
})
export class FormLogin implements OnInit {
  loginForm!: FormGroup;
  loginData: LoginData = { email: "", password: "" };
  errorMessage: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginData = {
        email: this.loginForm.value.username,
        password: this.loginForm.value.password,
        rememberMe: true,
      };

      this.authService.login(this.loginData).subscribe({
        next: (response) => {
          alert("Inicio de sesión exitoso: " + response.body.token);
          //Redireccionar a la página principal o dashboard aquí
        },
        error: (error) => {
          this.errorMessage = error.message;
        },
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
