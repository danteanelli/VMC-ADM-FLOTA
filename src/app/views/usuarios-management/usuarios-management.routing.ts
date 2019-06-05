import { Routes } from '@angular/router';

// Componentes
import { UsuariosManagementListComponent } from './usuarios-management-list/usuarios-management-list.component';
import { PerfilesManagementListComponent } from './perfiles-management/perfiles-management-list/perfiles-management-list.component';

export const usuariosRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'listado-usuarios',
                component: UsuariosManagementListComponent,
                data: { title: 'Lista Usuarios', breadcrumb: 'LISTA USUARIOS' }
            },
            {
                path: 'listado-perfiles',
                component: PerfilesManagementListComponent,
                data: { title: 'Lista Perfiles', breadcrumb: 'LISTA PERFILES' }
            }
        ]
    }
];
