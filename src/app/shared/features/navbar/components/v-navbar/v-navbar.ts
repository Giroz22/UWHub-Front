import { Component, inject } from "@angular/core";
import { VOption } from "../v-option/v-option";
import { LucideAngularModule, Menu, Search, LogOut } from "lucide-angular";
import { SearchBar } from "../../../search-bar/search-bar";
import { Logo } from "../../../logo/logo";
import { TokenService } from "../../../../services/token.service";

@Component({
  selector: "app-v-navbar",
  imports: [VOption, LucideAngularModule, SearchBar, Logo],
  templateUrl: "./v-navbar.html",
  styleUrl: "./v-navbar.scss",
})
export class VNavbar {
  readonly Menu = Menu;
  readonly Search = Search;
  readonly LogOut = LogOut;

  tokenService: TokenService = inject(TokenService);

  isOpen: boolean = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
