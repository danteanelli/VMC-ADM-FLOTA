import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Modulos
import { SharedMaterialModule } from '../../shared/shared-material.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

// Componentes
import { TalleresManagementListComponent } from './talleres-management-list/talleres-management-list.component';
import { TalleresManagementFormComponent } from './talleres-management-form/talleres-management-form.component';

// Rutas
import { talleresRoutes } from './talleres-management.routing';

// Servicio
import { TalleresManagementService } from './talleres-management.service';
import {FlexModule} from '@angular/flex-layout';

@NgModule({
    declarations: [
        TalleresManagementListComponent,
        TalleresManagementFormComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(talleresRoutes),
        SharedMaterialModule,
        NgxDatatableModule,
        ReactiveFormsModule,
        FlexModule
    ],
    providers: [
        TalleresManagementService
    ],
    entryComponents: [
        TalleresManagementFormComponent
    ]
})
export class TalleresManagementModule { }
