import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChoferesManagementRouting } from './choferes-management.routing';
import { ChoferesManagementListComponent } from './choferes-management-list/choferes-management-list.component';
import { ChoferesManagementFormComponent } from './choferes-management-form/choferes-management-form.component';

@NgModule({
  declarations: [ChoferesManagementListComponent, ChoferesManagementFormComponent],
  imports: [
    CommonModule,
    ChoferesManagementRouting
  ]
})
export class ChoferesManagementModule { }
