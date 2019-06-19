import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObrasManagementListComponent } from './obras-management-list/obras-management-list.component';
import { ObrasManagementFormComponent } from './obras-management-form/obras-management-form.component';

@NgModule({
  declarations: [ObrasManagementListComponent, ObrasManagementFormComponent],
  imports: [
    CommonModule
  ]
})
export class ObrasManagementModule { }
