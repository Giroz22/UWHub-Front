import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-logo",
  imports: [],
  templateUrl: "./logo.html",
  styleUrl: "./logo.scss",
})
export class Logo {
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(["/user-dashboard"]);
  }
}
