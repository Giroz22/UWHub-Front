import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-form-register",
  imports: [ReactiveFormsModule],
  templateUrl: "./form-register.html",
  styleUrl: "./form-register.scss",
})
export class FormRegister implements OnInit {
  registerForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl("", Validators.required),
      lastName: new FormControl(""),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log("Formulario enviado:", this.registerForm.value);
    } else {
      console.log("Formulario inválido");
      this.registerForm.markAllAsTouched(); // Marca todos los campos como tocados para mostrar los errores
    }
  }
}
