import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatChipsModule,
    MatListModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSlideToggleModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../shared/shared.module';
import { SharedMaterialModule } from '../../shared/shared-material.module';

// Rutas
import { VehiculoRoutes } from './vehiculos-management.routing';

// Componentes
import { VehiculoListaManagementComponent } from './vehiculo-lista-management/vehiculo-lista-management.component';
import { VehiculoFormManagementComponent } from './vehiculo-form-management/vehiculo-form-management.component';
import { SubTipoVehiculoListaManagementComponent } from './subtipos-vehiculos/sub-tipo-vehiculo-lista-management/sub-tipo-vehiculo-lista-management.component';
import { TipoVehiculoListaManagementComponent } from './tipos-vehiculos/tipo-vehiculo-lista-management/tipo-vehiculo-lista-management.component';
import { SubTipoVehiculoFormManagementComponent } from './subtipos-vehiculos/sub-tipo-vehiculo-form-management/sub-tipo-vehiculo-form-management.component';
import { TipoVehiculoFormManagementComponent } from './tipos-vehiculos/tipo-vehiculo-form-management/tipo-vehiculo-form-management.component';
import { MarcasManagementListComponent } from './marcas-management/marcas-management-list/marcas-management-list.component';
import { MarcasManagementFormComponent } from './marcas-management/marcas-management-form/marcas-management-form.component';
import { ModelosManagementListComponent } from './modelos-management/modelos-management-list/modelos-management-list.component';
import { ModelosManagementFormComponent } from './modelos-management-form/modelos-management-form.component';

// Servicios
import { VehiculosService } from './vehiculos.service';
import { MarcasManagementService } from './marcas-management/marcas-management.service';
import { ModelosManagementService } from './modelos-management/modelos-management.service';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        NgxDatatableModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatMenuModule,
        MatButtonModule,
        MatChipsModule,
        MatListModule,
        MatTooltipModule,
        MatDialogModule,
        MatSnackBarModule,
        MatSlideToggleModule,
        SharedModule,
        RouterModule.forChild(VehiculoRoutes),
        SharedMaterialModule,
    ],
    declarations: [
        VehiculoListaManagementComponent,
        VehiculoFormManagementComponent,
        SubTipoVehiculoListaManagementComponent,
        TipoVehiculoListaManagementComponent,
        SubTipoVehiculoFormManagementComponent,
        TipoVehiculoFormManagementComponent,
        MarcasManagementListComponent,
        MarcasManagementFormComponent,
        ModelosManagementListComponent,
        ModelosManagementFormComponent
    ],
    entryComponents: [
        VehiculoFormManagementComponent,
        TipoVehiculoFormManagementComponent,
        SubTipoVehiculoFormManagementComponent,
        MarcasManagementFormComponent,
        ModelosManagementFormComponent
    ],
    providers: [
        VehiculosService,
        MarcasManagementService,
        ModelosManagementService
    ]
})
export class VehiculosManagementModule { }
