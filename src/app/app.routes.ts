import { Routes } from "@angular/router";
import { authRoutes } from "./features/auth/routes/auth.routes";
import { dashboardRoutes } from "./features/dashboard/routes/dashboard.routes";

export const routes: Routes = [...authRoutes, ...dashboardRoutes];
