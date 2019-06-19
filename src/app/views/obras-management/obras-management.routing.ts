import { Routes } from '@angular/router';

// Componentes
import { ObrasManagementListComponent } from './obras-management-list/obras-management-list.component';

export const obrasRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'listado-obras',
                component: ObrasManagementListComponent,
                data: { title: 'Obras', breadcrumb: 'Obras' }
            }
        ]
    }
];
