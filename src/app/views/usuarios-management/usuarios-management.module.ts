import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedMaterialModule } from '../../shared/shared-material.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

// Componentes
import { UsuariosManagementFormComponent } from './usuarios-management-form/usuarios-management-form.component';
import { UsuariosManagementListComponent } from './usuarios-management-list/usuarios-management-list.component';
import { PerfilesManagementFormComponent } from './perfiles-management/perfiles-management-form/perfiles-management-form.component';
import { PerfilesManagementListComponent } from './perfiles-management/perfiles-management-list/perfiles-management-list.component';

import { usuariosRoutes } from './usuarios-management.routing'

@NgModule({
    declarations: [
        UsuariosManagementFormComponent,
        UsuariosManagementListComponent,
        PerfilesManagementFormComponent,
        PerfilesManagementListComponent
    ],
    imports: [
        CommonModule,
        SharedMaterialModule,
        NgxDatatableModule,
        RouterModule.forChild(usuariosRoutes)
    ],
    providers: [
        UsuariosManagementFormComponent,
        PerfilesManagementFormComponent
    ]
})
export class UsuariosManagementModule { }
