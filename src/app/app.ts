import { Component } from "@angular/core";
import { Auth } from "./features/auth/components/auth/auth";

@Component({
  selector: "app-root",
  imports: [Auth],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class App {}
