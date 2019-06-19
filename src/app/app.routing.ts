import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './core/guards/auth.guard';

export const rootRouterConfig: Routes = [
    {
        path: '',
        redirectTo: 'dashboard/home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'sessions',
                loadChildren: './views/sessions/sessions.module#SessionsModule',
                data: { title: 'Session'}
            }
        ]
    },
    {
        path: '',
        component: AdminLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'dashboard',
                loadChildren: './views/dashboard/dashboard.module#DashboardModule',
                data: { title: 'Dashboard', breadcrumb: 'DASHBOARD'}
            },
            {
                path: 'vehiculo',
                loadChildren: './views/vehiculos-management/vehiculos-management.module#VehiculosManagementModule',
                data: { title: 'Vehiculo', breadcrumb: 'VEHICULO'}
            },
            {
                path: 'chofer',
                loadChildren: './views/choferes-management/choferes-management.module#ChoferesManagementModule',
                data: { title: 'Chofer', breadcrumb: 'CHOFER'}
            },
            {
                path: 'usuario',
                loadChildren: './views/usuarios-management/usuarios-management.module#UsuariosManagementModule',
                data: { title: 'Usuario', breadcrumb: 'USUARIO'}
            },
            {
                path: 'alquiler',
                loadChildren: './views/sistema-alquileres-management/sistema-alquileres-management.module#SistemaAlquileresManagementModule',
                data: { title: 'Sistema Alquiler', breadcrumb: 'Sistema Alquiler'}
            },
            {
                path: 'taller',
                loadChildren: './views/talleres-management/talleres-management.module#TalleresManagementModule',
                data: { title: 'Talleres', breadcrumb: 'Talleres'}
            },
            {
                path: 'others',
                loadChildren: './views/others/others.module#OthersModule',
                data: { title: 'Others', breadcrumb: 'OTHERS'}
            },
            {
                path: 'page-layouts',
                loadChildren: './views/page-layouts/page-layouts.module#PageLayoutsModule'
            },
            {
                path: 'search',
                loadChildren: './views/search-view/search-view.module#SearchViewModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'sessions/404'
    }
];

