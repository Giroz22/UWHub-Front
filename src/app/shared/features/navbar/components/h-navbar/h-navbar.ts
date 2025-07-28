import { Component } from "@angular/core";
import { LucideAngularModule, CircleUserRound } from "lucide-angular";
import { Logo } from "../../../logo/logo";

@Component({
  selector: "app-h-navbar",
  imports: [LucideAngularModule, Logo],
  templateUrl: "./h-navbar.html",
  styleUrl: "./h-navbar.scss",
})
export class HNavbar {
  readonly CircleUserRound = CircleUserRound;
}
