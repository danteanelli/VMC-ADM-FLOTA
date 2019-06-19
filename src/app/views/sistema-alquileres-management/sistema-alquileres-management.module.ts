import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Componentes
import { SistemaAlquileresManagementListComponent } from './sistema-alquileres-management-list/sistema-alquileres-management-list.component';
import { SistemaAlquileresManagementFormComponent } from './sistema-alquileres-management-form/sistema-alquileres-management-form.component';

// Rutas
import { sistemaAlquilerRoutes } from './sistema-alquileres-management.routing';

@NgModule({
    declarations: [
        SistemaAlquileresManagementListComponent,
        SistemaAlquileresManagementFormComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(sistemaAlquilerRoutes)
    ]
})
export class SistemaAlquileresManagementModule { }
