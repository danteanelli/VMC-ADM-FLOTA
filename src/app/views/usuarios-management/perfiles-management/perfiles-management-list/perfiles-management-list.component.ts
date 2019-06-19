import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';

// Services
import { AppConfirmService } from '../../../../shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from '../../../../shared/services/app-loader/app-loader.service';
import { PerfilesManagementService } from '../perfiles-management.service';

// Componentes
import { PerfilesManagementFormComponent } from '../perfiles-management-form/perfiles-management-form.component';

// Animacion
import { egretAnimations } from '../../../../shared/animations/egret-animations';

// Clase - Modelo
import { Perfil } from '../../../../models/perfil.model';

@Component({
    selector: 'app-perfiles-management-list',
    templateUrl: './perfiles-management-list.component.html',
    styleUrls: ['./perfiles-management-list.component.scss'],
    animations: egretAnimations
})
export class PerfilesManagementListComponent implements OnInit, OnDestroy {

    items: Perfil[];
    getItemSub: Subscription;

    constructor(private dialog: MatDialog,
                private snack: MatSnackBar,
                private confirmService: AppConfirmService,
                private loader: AppLoaderService,
                private perfilesService: PerfilesManagementService) {
    }

    ngOnInit() {
        this.getPerfiles();
    }

    ngOnDestroy(): void {
        if (this.getItemSub) {
            this.getItemSub.unsubscribe();
        }
    }

    getPerfiles() {
        this.getItemSub = this.perfilesService.getAll().subscribe(data => {
            this.items = data;
            console.log(this.items);
        },
        error => {
            console.log('error al obtener los perfiles');
        });
    }

    openPopUp(data: any = {}, isNew?) {
        let title = isNew ? 'Agregar Perfil' : 'Modificar Perfil';
        let dialogRef: MatDialogRef<any> = this.dialog.open(PerfilesManagementFormComponent, {
            width: '400px',
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
                    this.perfilesService.add(res)
                        .subscribe( data => {
                            // this.items = data;
                            this.getPerfiles();
                            this.loader.close();
                            this.snack.open('Agregado correctamente!', 'OK', { duration: 4000 });
                        });
                } else {
                    this.perfilesService.update(data.id, res)
                        .subscribe( data => {
                            // this.items = data;
                            this.getPerfiles();
                            this.loader.close();
                            this.snack.open('Modificado correctamente!', 'OK', { duration: 4000 });
                        });
                }
            });
    }

    deleteItem(row) {
        this.confirmService.confirm({message: `Desea eliminar ${row.nombre}?`})
            .subscribe(res => {
                if (res) {
                    this.loader.open();
                    this.perfilesService.delete(row.id)
                        .subscribe(data => {
                            this.items = data;
                            this.loader.close();
                            this.snack.open('Borrado correctamente!', 'OK', { duration: 4000 });
                        });
                }
            });
    }

}
