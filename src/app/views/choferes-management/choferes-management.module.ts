import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Componentes
import { ChoferesManagementListComponent } from './choferes-management-list/choferes-management-list.component';
import { ChoferesManagementFormComponent } from './choferes-management-form/choferes-management-form.component';
import { TiposLicenciaManagementListComponent } from './tipos-licencia-management/tipos-licencia-management-list/tipos-licencia-management-list.component';
import { TiposLicenciaManagementFormComponent } from './tipos-licencia-management/tipos-licencia-management-form/tipos-licencia-management-form.component';

// Ruta
import { choferesRoutes } from './choferes-management.routing';

// Modulos
import { SharedMaterialModule } from '../../shared/shared-material.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        ChoferesManagementListComponent,
        ChoferesManagementFormComponent,
        TiposLicenciaManagementListComponent,
        TiposLicenciaManagementFormComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(choferesRoutes),
        SharedMaterialModule,
        NgxDatatableModule,
        ReactiveFormsModule
    ],
    entryComponents: [
        ChoferesManagementFormComponent,
        TiposLicenciaManagementFormComponent
    ]
})
export class ChoferesManagementModule { }
