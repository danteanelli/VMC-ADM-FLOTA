import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Componentes
import { CentroDeCostosManagementListComponent } from './centro-de-costos-management-list/centro-de-costos-management-list.component';
import { CentroDeCostosManagementFormComponent } from './centro-de-costos-management-form/centro-de-costos-management-form.component';

// Rutas
import { centroCostosRoutes } from './centro-de-costos-management.routing';
import {SharedMaterialModule} from '../../shared/shared-material.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
    declarations: [
        CentroDeCostosManagementListComponent,
        CentroDeCostosManagementFormComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(centroCostosRoutes),
        SharedMaterialModule,
        NgxDatatableModule,
        ReactiveFormsModule,
        FlexLayoutModule
    ],
    entryComponents: [
        CentroDeCostosManagementFormComponent
    ],
    providers: [

    ]
})
export class CentroDeCostosManagementModule { }
