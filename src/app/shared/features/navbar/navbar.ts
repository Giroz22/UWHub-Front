import { Component } from "@angular/core";
import { HNavbar } from "./components/h-navbar/h-navbar";
import { VNavbar } from "./components/v-navbar/v-navbar";

@Component({
  selector: "app-navbar",
  imports: [HNavbar, VNavbar],
  templateUrl: "./navbar.html",
  styleUrl: "./navbar.scss",
})
export class Navbar {}
