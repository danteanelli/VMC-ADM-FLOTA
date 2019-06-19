import { Routes } from '@angular/router';

// Componentes
import { SistemaAlquileresManagementListComponent } from './sistema-alquileres-management-list/sistema-alquileres-management-list.component';

export const sistemaAlquilerRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'sistema-alquileres',
                component: SistemaAlquileresManagementListComponent,
                data: { title: 'Sistema Alquiler', breadcrumb: 'SISTEMA ALQUILER' }
            }
        ]
    }
];
