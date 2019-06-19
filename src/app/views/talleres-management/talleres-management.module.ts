import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Componentes
import { TalleresManagementListComponent } from './talleres-management-list/talleres-management-list.component';
import { TalleresManagementFormComponent } from './talleres-management-form/talleres-management-form.component';

// Rutas
import { talleresRoutes } from './talleres-management.routing';

@NgModule({
    declarations: [
        TalleresManagementListComponent,
        TalleresManagementFormComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(talleresRoutes)
    ]
})
export class TalleresManagementModule { }
