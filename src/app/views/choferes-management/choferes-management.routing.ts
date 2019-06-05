import { Routes } from '@angular/router';

import { ChoferesManagementListComponent } from './choferes-management-list/choferes-management-list.component';
import { TiposLicenciaManagementListComponent } from './tipos-licencia-management/tipos-licencia-management-list/tipos-licencia-management-list.component';

export const choferesRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'listado-choferes',
                component: ChoferesManagementListComponent,
                data: { title: 'Lista Choferes', breadcrumb: 'LISTA CHOFERES' }
            },
            {
                path: 'tipos-licencia',
                component: TiposLicenciaManagementListComponent,
                data: { title: 'Tipos Licencia', breadcrumb: 'TIPOS LICENCIA' }
            }
        ]
    }
];
