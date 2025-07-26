import { Routes } from "@angular/router";
import { authRoutes } from "./features/auth/routes/auth.routes";
import { Auth } from "./features/auth/components/auth/auth";
import { dashboardRoutes } from "./features/dashboard/routes/dashboard.routes";

export const routes: Routes = [
  {
    path: "",
    component: Auth,
  },
  ...authRoutes,
  ...dashboardRoutes,
];
