import { Component, inject } from "@angular/core";
import { LucideAngularModule, CircleUserRound } from "lucide-angular";
import { UserService } from "../../services/user.service";
import { TokenService } from "../../services/token.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-dropdown-menu",
  imports: [LucideAngularModule],
  templateUrl: "./dropdown-menu.html",
  styleUrl: "./dropdown-menu.scss",
})
export class DropdownMenu {
  userService = inject(UserService);
  tokenService = inject(TokenService);
  router: Router = inject(Router);

  user = this.userService.user;

  readonly CircleUserRound = CircleUserRound;

  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  redirectPerfile() {
    this.router.navigate(["/dashboard/perfil"]);
    this.toggleDropdown();
  }
}
