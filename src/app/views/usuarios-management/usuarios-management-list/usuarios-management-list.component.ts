import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';

// Servicios
import { AppConfirmService} from '../../../shared/services/app-confirm/app-confirm.service';
import { AppLoaderService} from '../../../shared/services/app-loader/app-loader.service';
import { UsuariosManagementService } from '../usuarios-management.service';

// Animacion
import { egretAnimations } from '../../../shared/animations/egret-animations';

// Componente
import { UsuariosManagementFormComponent } from '../usuarios-management-form/usuarios-management-form.component';

// Modelo - Clase
import { Usuario } from '../../../models/usuario.model';

@Component({
    selector: 'app-usuarios-management-list',
    templateUrl: './usuarios-management-list.component.html',
    styleUrls: ['./usuarios-management-list.component.scss'],
    animations: egretAnimations
})
export class UsuariosManagementListComponent implements OnInit {

    items: Usuario[];
    getItemSub: Subscription;

    constructor(private dialog: MatDialog,
                private snack: MatSnackBar,
                private confirmService: AppConfirmService,
                private loader: AppLoaderService,
                private usuariosService: UsuariosManagementService) {
    }

    ngOnInit() {
        this.getUsuarios();
    }

    getUsuarios() {
        this.usuariosService.getAll().subscribe(data => {
            this.items = data;
        },
        error => {
            this.snack.open('Error al obtener los datos', 'OK', { duration: 4000 });
        });
    }

    openPopUp(data: any = {}, isNew?) {
        let title = isNew ? 'Agregar Usuario' : 'Modificar Usuario';
        let dialogRef: MatDialogRef<any> = this.dialog.open(UsuariosManagementFormComponent, {
            width: '720px',
            disableClose: true,
            data: { title: title, payload: data }
        });
        dialogRef.afterClosed()
            .subscribe(res => {
                if (!res) {
                    // If user press cancel
                    return;
                }
                this.loader.open();
                if (isNew) {
                    this.usuariosService.add(res)
                        .subscribe( data => {
                            this.getUsuarios();
                            this.loader.close();
                            this.snack.open('Agregado correctamente!', 'OK', { duration: 4000 });
                        });
                } else {
                    this.usuariosService.update(data.id, res)
                        .subscribe( data => {
                            this.getUsuarios();
                            this.loader.close();
                            this.snack.open('Modificado correctamente!', 'OK', { duration: 4000 });
                        });
                }
            });
    }

}
