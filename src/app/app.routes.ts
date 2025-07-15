import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnalyticsRoute, DashboardRoute, ProductsRoute, SettingsRoute, UsersRoute } from './shared/constants/menu.constant';
import { UsersComponent } from './users/users.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SettingsComponent } from './settings/settings.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: DashboardRoute,
        pathMatch: 'full',
    },
    { path: DashboardRoute, component: DashboardComponent },
    { path: UsersRoute, component: UsersComponent },
    { path: AnalyticsRoute, component: AnalyticsComponent },
    { path: SettingsRoute, component: SettingsComponent },
    { path: ProductsRoute, component: ProductsComponent }
];
