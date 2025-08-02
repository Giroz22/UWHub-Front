import { Component } from "@angular/core";
import { Logo } from "../../../logo/logo";
import { DropdownMenu } from "../../../dropdown-menu/dropdown-menu";

@Component({
  selector: "app-h-navbar",
  imports: [Logo, DropdownMenu],
  templateUrl: "./h-navbar.html",
  styleUrl: "./h-navbar.scss",
})
export class HNavbar {
  
}
