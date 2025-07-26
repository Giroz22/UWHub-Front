import { Routes } from "@angular/router";
import { UserDashboard } from "../components/user-dashboard/user-dashboard";

export const dashboardRoutes: Routes = [
  {
    path: "dashboard",
    component: UserDashboard,
  },
];
