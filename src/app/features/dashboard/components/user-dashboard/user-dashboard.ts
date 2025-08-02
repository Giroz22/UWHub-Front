import { Component, inject, OnInit } from "@angular/core";
import { Navbar } from "../../../../shared/features/navbar/navbar";
import { UserService } from "../../../../shared/services/user.service";

@Component({
  selector: "app-user-dashboard",
  imports: [Navbar],
  templateUrl: "./user-dashboard.html",
  styleUrl: "./user-dashboard.scss",
})
export class UserDashboard implements OnInit {
  private userService = inject(UserService);

  ngOnInit(): void {
    this.userService.getUserData();
  }
}
