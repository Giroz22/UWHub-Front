import { Routes } from "@angular/router";
import { UserDashboard } from "../components/user-dashboard/user-dashboard";
import { Profile } from "../../profile/profile";
import { authGuard } from "../../auth/guards/auth-guard";

export const dashboardRoutes: Routes = [
  {
    path: "dashboard",
    component: UserDashboard,
    canActivate: [authGuard],
    children: [
      {
        path: "perfil",
        component: Profile,
      },
    ],
  },
];
