import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { AuthService } from "../../services/auth";
import { RegisterData } from "../../models/RegisterData.model";

@Component({
  selector: "app-form-register",
  imports: [ReactiveFormsModule],
  templateUrl: "./form-register.html",
  styleUrl: "./form-register.scss",
})
export class FormRegister implements OnInit {
  registerForm!: FormGroup;
  errorMessage: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl("", Validators.required),
      lastname: new FormControl(""),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const registerData: RegisterData = {
        name: this.registerForm.value.name,
        lastname: this.registerForm.value.lastname,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
      };

      this.authService.register(registerData).subscribe({
        error: (error) => {
          this.errorMessage = error.message;
        },
      });
    } else {
      this.registerForm.markAllAsTouched(); // Marca todos los campos como tocados para mostrar los errores
    }
  }
}
