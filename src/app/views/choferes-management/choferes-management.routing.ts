import { Routes } from '@angular/router';

import { ChoferesManagementListComponent } from './choferes-management-list/choferes-management-list.component';
import { ChoferesManagementFormComponent } from './choferes-management-form/choferes-management-form.component';
import { TiposLicenciaManagementListComponent } from './tipos-licencia-management/tipos-licencia-management-list/tipos-licencia-management-list.component';
import { TiposLicenciaManagementFormComponent } from './tipos-licencia-management/tipos-licencia-management-form/tipos-licencia-management-form.component';

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
