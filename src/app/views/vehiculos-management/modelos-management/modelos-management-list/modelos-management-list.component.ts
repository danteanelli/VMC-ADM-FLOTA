import {Component, OnDestroy, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';
import { egretAnimations } from '../../../../shared/animations/egret-animations';

// Servicios
import { AppConfirmService } from '../../../../shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from '../../../../shared/services/app-loader/app-loader.service';
import { ModelosManagementService } from '../modelos-management.service';

// Componentes
import { ModelosManagementFormComponent } from '../modelos-management-form/modelos-management-form.component';
import {Modelo} from '../../../../models/modelo.model';

@Component({
    selector: 'app-modelos-management-list',
    templateUrl: './modelos-management-list.component.html',
    styleUrls: ['./modelos-management-list.component.scss'],
    animations: egretAnimations
})
export class ModelosManagementListComponent implements OnInit, OnDestroy {

    items: Modelo[];
    getItemSub: Subscription;

    constructor(private dialog: MatDialog,
                private snack: MatSnackBar,
                private confirmService: AppConfirmService,
                private loader: AppLoaderService,
                private modelosService: ModelosManagementService) { }

    ngOnInit() {
        this.obtenerModelos();
    }

    ngOnDestroy(): void {
        if (this.getItemSub) {
            this.getItemSub.unsubscribe();
        }
    }

    obtenerModelos() {
        this.getItemSub = this.modelosService.getAll().subscribe(data => {
            this.items = data;
            this.loader.close();
        },
        error => {
            console.log('error al obtener las marcas');
            // this.loader.close();
            this.snack.open('Error al cargar los datos', 'OK', { duration: 4000 });
        });
    }

    openPopUp(data: any = {}, isNew?) {
        let title = isNew ? 'Agregar Modelo' : 'Modificar Modelo';
        let dialogRef: MatDialogRef<any> = this.dialog.open(ModelosManagementFormComponent, {
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
                    // this.vehiculoService.addItem(res)
                    //     .subscribe( data => {
                    //         this.items = data;
                    //         this.loader.close();
                    //         this.snack.open('Member Added!', 'OK', { duration: 4000 });
                    //     });
                } else {
                    // this.vehiculoService.updateItem(data._id, res)
                    //     .subscribe( data => {
                    //         this.items = data;
                    //         this.loader.close();
                    //         this.snack.open('Member Updated!', 'OK', { duration: 4000 });
                    //     });
                }
            });
    }

}
