import { Routes } from '@angular/router';

import { VehiculoListaManagementComponent } from './vehiculo-lista-management/vehiculo-lista-management.component';
import { TipoVehiculoListaManagementComponent } from './tipos-vehiculos/tipo-vehiculo-lista-management/tipo-vehiculo-lista-management.component';
import { SubTipoVehiculoListaManagementComponent } from './subtipos-vehiculos/sub-tipo-vehiculo-lista-management/sub-tipo-vehiculo-lista-management.component';

export const VehiculoRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'listado-vehiculos',
                component: VehiculoListaManagementComponent,
                data: { title: 'Lista Vehiculos', breadcrumb: 'LISTA VEHICULOS' }
            },
            {
                path: 'tipos-vehiculos',
                component: TipoVehiculoListaManagementComponent,
                data: { title: 'Tipo Vehiculos', breadcrumb: 'TIPO VEHICULOS' }
            },
            {
                path: 'subtipos-vehiculos',
                component: SubTipoVehiculoListaManagementComponent,
                data: { title: 'Subtipo Vehiculos', breadcrumb: 'SUBTIPO VEHICULOS' }
            },
            {
                path: 'listado-marcas',
                component: SubTipoVehiculoListaManagementComponent,
                data: { title: 'Lista Marcas', breadcrumb: 'LISTA MARCAS' }
            },
            {
                path: 'listado-modelos',
                component: SubTipoVehiculoListaManagementComponent,
                data: { title: 'Lista Modelos', breadcrumb: 'LISTA MODELOS' }
            }
        ]
    }
];
