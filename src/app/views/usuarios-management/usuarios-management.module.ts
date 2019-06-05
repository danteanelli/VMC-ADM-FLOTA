import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosManagementFormComponent } from './usuarios-management-form/usuarios-management-form.component';
import { UsuariosManagementListComponent } from './usuarios-management-list/usuarios-management-list.component';

@NgModule({
  declarations: [UsuariosManagementFormComponent, UsuariosManagementListComponent],
  imports: [
    CommonModule
  ]
})
export class UsuariosManagementModule { }
