import { Component } from "@angular/core";
import {
  LucideAngularModule,
  Menu,
  Search,
  CircleUserRound,
  Bolt,
} from "lucide-angular";

@Component({
  selector: "app-navbar",
  imports: [LucideAngularModule],
  templateUrl: "./navbar.html",
  styleUrl: "./navbar.scss",
})
export class Navbar {
  readonly Menu = Menu;
  readonly Search = Search;
  readonly CircleUserRound = CircleUserRound;
  readonly Bolt = Bolt;

  isOpen: boolean = false;
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
