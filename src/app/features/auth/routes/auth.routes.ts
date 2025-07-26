import { Routes } from "@angular/router";
import { UserDashboard } from "../../dashboard/components/user-dashboard/user-dashboard";
import { Auth } from "../components/auth/auth";
import { authGuard } from "../guards/auth-guard";

export const authRoutes: Routes = [
  {
    path: "auth",
    component: Auth,
  },
  {
    path: "user-dashboard",
    component: UserDashboard,
    canActivate: [authGuard],    
  },
];
