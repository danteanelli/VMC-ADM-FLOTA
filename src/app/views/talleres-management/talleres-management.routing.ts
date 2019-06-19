import { Routes } from '@angular/router';

// Componentes
import { TalleresManagementListComponent } from './talleres-management-list/talleres-management-list.component';
import { TalleresManagementFormComponent } from './talleres-management-form/talleres-management-form.component';

export const talleresRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'listado-talleres',
                component: TalleresManagementListComponent,
                data: { title: 'Listado Talleres', breadcrumb: 'LISTADO TALLERES' }
            },
            {
                path: 'taller',
                component: TalleresManagementFormComponent,
                data: { title: 'Nuevo Taller', breadcrumb: 'NUEVO TALLER' }
            },
            {
                path: 'taller/:id',
                component: TalleresManagementFormComponent,
                data: { title: 'Talleres', breadcrumb: 'TALLER' }
            }
        ]
    }
];
