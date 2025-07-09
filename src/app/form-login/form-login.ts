import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-form-login",
  imports: [ReactiveFormsModule],
  templateUrl: "./form-login.html",
  styleUrl: "./form-login.scss",
})
export class FormLogin implements OnInit {
  loginForm!: FormGroup;

  constructor() {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log("Formulario enviado", this.loginForm.value);
    } else {
      console.log("Formulario inválido");
      this.loginForm.markAllAsTouched(); // Marca todos los campos como tocados para mostrar los errores
    }
  }
}
