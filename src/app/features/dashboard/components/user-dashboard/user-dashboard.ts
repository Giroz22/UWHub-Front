import { Component } from "@angular/core";
import { Navbar } from "../../../../shared/features/navbar/navbar";

@Component({
  selector: "app-user-dashboard",
  imports: [Navbar],
  templateUrl: "./user-dashboard.html",
  styleUrl: "./user-dashboard.scss",
})
export class UserDashboard {}
