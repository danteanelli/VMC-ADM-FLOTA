import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChoferesManagementRouting } from './choferes-management.routing';
import { ChoferesManagementListComponent } from './choferes-management-list/choferes-management-list.component';
import { ChoferesManagementFormComponent } from './choferes-management-form/choferes-management-form.component';
import { TiposLicenciaManagementListComponent } from './tipos-licencia-management/tipos-licencia-management-list/tipos-licencia-management-list.component';
import { TiposLicenciaManagementFormComponent } from './tipos-licencia-management/tipos-licencia-management-form/tipos-licencia-management-form.component';

@NgModule({
    declarations: [
        ChoferesManagementListComponent,
        ChoferesManagementFormComponent,
        TiposLicenciaManagementListComponent,
        TiposLicenciaManagementFormComponent
    ],
    imports: [
        CommonModule,
        ChoferesManagementRouting
    ]
})
export class ChoferesManagementModule { }
