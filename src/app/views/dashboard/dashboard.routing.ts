import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

export const DashboardRoutes: Routes = [
    {
        path: 'home',
        component: DashboardComponent,
        data: { title: 'Home', breadcrumb: 'Home' }
    }
];
