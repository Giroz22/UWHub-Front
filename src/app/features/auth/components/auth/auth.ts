import { Component } from "@angular/core";
import { FormLogin } from "../form-login/form-login";
import { FormRegister } from "../form-register/form-register";

@Component({
  selector: "app-auth",
  imports: [FormLogin, FormRegister],
  templateUrl: "./auth.html",
  styleUrl: "./auth.scss",
})
export class Auth {
  protected isRegister: boolean = true;
}
