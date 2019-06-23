import { Routes } from '@angular/router';

import { CentroDeCostosManagementListComponent } from './centro-de-costos-management-list/centro-de-costos-management-list.component';

export const centroCostosRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'centro-costos',
                component: CentroDeCostosManagementListComponent,
                data: { title: 'Centro de Costos', breadcrumb: 'CENTRO DE COSTOS' }
            }
        ]
    }
];
