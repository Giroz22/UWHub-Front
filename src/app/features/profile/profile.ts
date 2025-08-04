import { Component, inject } from "@angular/core";
import { UserService } from "../../shared/services/user.service";

@Component({
  selector: "app-profile",
  imports: [],
  templateUrl: "./profile.html",
  styleUrl: "./profile.scss",
})
export class Profile {
  userInfo = inject(UserService).user;

  isEditMode: boolean = false;

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  onCancel() {
    this.toggleEditMode();
    console.log("Cleaning...");
  }

  onUpdate() {
    console.log("Updating...");
  }

  onDelete() {
    console.log("Deleting...");
  }
}
