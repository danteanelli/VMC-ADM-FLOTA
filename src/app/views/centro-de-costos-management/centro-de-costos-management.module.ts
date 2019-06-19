import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentroDeCostosManagementListComponent } from './centro-de-costos-management-list/centro-de-costos-management-list.component';
import { CentroDeCostosManagementFormComponent } from './centro-de-costos-management-form/centro-de-costos-management-form.component';

@NgModule({
  declarations: [CentroDeCostosManagementListComponent, CentroDeCostosManagementFormComponent],
  imports: [
    CommonModule
  ]
})
export class CentroDeCostosManagementModule { }
