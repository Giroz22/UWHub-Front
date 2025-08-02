import { Component } from "@angular/core";
import { VOption } from "../v-option/v-option";
import { LucideAngularModule, Menu, Search, Bolt } from "lucide-angular";
import { SearchBar } from "../../../search-bar/search-bar";
import { Logo } from "../../../logo/logo";

@Component({
  selector: "app-v-navbar",
  imports: [VOption, LucideAngularModule, SearchBar, Logo],
  templateUrl: "./v-navbar.html",
  styleUrl: "./v-navbar.scss",
})
export class VNavbar {
  readonly Menu = Menu;
  readonly Search = Search;
  readonly Bolt = Bolt;

  isOpen: boolean = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
