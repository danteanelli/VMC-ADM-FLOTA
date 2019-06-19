import {Component, OnDestroy, OnInit} from '@angular/core';
import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';

// Animacion
import { egretAnimations } from '../../../shared/animations/egret-animations';

// Servicios
import { AppConfirmService } from '../../../shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from '../../../shared/services/app-loader/app-loader.service';
import { TalleresManagementService } from '../talleres-management.service';

// Modelo - Clase
import { Taller } from '../../../models/taller.model';
import {TalleresManagementFormComponent} from '../talleres-management-form/talleres-management-form.component';

@Component({
    selector: 'app-talleres-management-list',
    templateUrl: './talleres-management-list.component.html',
    styleUrls: ['./talleres-management-list.component.scss'],
    animations: egretAnimations
})
export class TalleresManagementListComponent implements OnInit, OnDestroy {

    items: Taller[];
    getItemSub: Subscription;

    constructor(private dialog: MatDialog,
                private snack: MatSnackBar,
                private confirmService: AppConfirmService,
                private loader: AppLoaderService,
                private talleresService: TalleresManagementService) {
    }

    ngOnInit() {
        this.getTalleres();
    }

    ngOnDestroy(): void {
        if (this.getItemSub) {
            this.getItemSub.unsubscribe();
        }
    }

    getTalleres() {
        setTimeout(() => {
            this.loader.open('Cargando...');
        });
        this.getItemSub = this.talleresService.getAll().subscribe(data => {
                this.items = data;
                this.loader.close();
            },
            error => {
                console.log('error al obtener los talleres');
            });
    }

    openPopUp(data: any = {} , isNew?) {
        let title = isNew ? 'Agregar Taller' : 'Modificar Taller';
        let dialogRef: MatDialogRef<any> = this.dialog.open(TalleresManagementFormComponent, {
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
                    this.talleresService.add(res)
                        .subscribe( data => {
                            // this.items = data;
                            this.getTalleres();
                            this.loader.close();
                            this.snack.open('Agregado correctamente!', 'OK', { duration: 4000 });
                        });
                } else {
                    this.talleresService.update(data.id, res)
                        .subscribe( data => {
                            // this.items = data;
                            this.getTalleres();
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
                    this.talleresService.delete(row)
                        .subscribe(data => {
                            this.items = data;
                            this.loader.close();
                            this.snack.open('Borrado correctamente!', 'OK', { duration: 4000 });
                        });
                }
            });
    }



}
