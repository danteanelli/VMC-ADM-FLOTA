import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';

// Componente
import { CentroDeCostosManagementFormComponent } from '../centro-de-costos-management-form/centro-de-costos-management-form.component';

// Servicios
import { AppConfirmService } from '../../../shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from '../../../shared/services/app-loader/app-loader.service';
import { CentroDeCostosManagementService } from '../centro-de-costos-management.service';

// Animacion
import { egretAnimations } from '../../../shared/animations/egret-animations';

// Modelo
import { CentroDeCosto } from '../../../models/centroDeCosto.model';

@Component({
    selector: 'app-centro-de-costos-management-list',
    templateUrl: './centro-de-costos-management-list.component.html',
    styleUrls: ['./centro-de-costos-management-list.component.scss'],
    animations: egretAnimations
})
export class CentroDeCostosManagementListComponent implements OnInit, OnDestroy {

    items: CentroDeCosto[];
    getItemSub: Subscription;

    constructor(private dialog: MatDialog,
                private snack: MatSnackBar,
                private confirmService: AppConfirmService,
                private loader: AppLoaderService,
                private centroCostoService: CentroDeCostosManagementService) { }

    ngOnInit() {
        this.getCentroDeCostos();
    }

    ngOnDestroy(): void {
        if (this.getItemSub) {
            this.getItemSub.unsubscribe();
        }
    }

    getCentroDeCostos() {
        /*setTimeout(() => {
            this.loader.open('Cargando...');
        });*/
        this.getItemSub = this.centroCostoService.getAll().subscribe(data => {
                this.items = data;
                this.loader.close();
            },
            error => {
                console.log('error al obtener los centros de costos');
            });
    }

    openPopUp(data: any = {} , isNew?) {
        let title = isNew ? 'Agregar Centro de Costo' : 'Modificar Centro de Costos';
        let dialogRef: MatDialogRef<any> = this.dialog.open(CentroDeCostosManagementFormComponent, {
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
                    this.centroCostoService.add(res)
                        .subscribe( data => {
                            this.getCentroDeCostos();
                            this.loader.close();
                            this.snack.open('Agregado correctamente!', 'OK', { duration: 4000 });
                        });
                } else {
                    this.centroCostoService.update(data.id, res)
                        .subscribe( data => {
                            this.getCentroDeCostos();
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
                    this.centroCostoService.delete(row)
                        .subscribe(data => {
                            this.items = data;
                            this.loader.close();
                            this.snack.open('Borrado correctamente!', 'OK', { duration: 4000 });
                        });
                }
            });
    }



}
