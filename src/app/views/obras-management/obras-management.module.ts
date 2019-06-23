import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Componentes
import { ObrasManagementListComponent } from './obras-management-list/obras-management-list.component';
import { ObrasManagementFormComponent } from './obras-management-form/obras-management-form.component';

// Rutas
import { obrasRoutes } from './obras-management.routing';

@NgModule({
    declarations: [
        ObrasManagementListComponent,
        ObrasManagementFormComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(obrasRoutes)
    ],
    entryComponents: [
        ObrasManagementFormComponent
    ]
})
export class ObrasManagementModule { }
