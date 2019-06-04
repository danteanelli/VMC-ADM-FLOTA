import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Rutas
import {DashboardRoutes} from './dashboard.routing';

// Componente
import { DashboardComponent } from './dashboard.component';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(DashboardRoutes)
    ]
})
export class DashboardModule { }
