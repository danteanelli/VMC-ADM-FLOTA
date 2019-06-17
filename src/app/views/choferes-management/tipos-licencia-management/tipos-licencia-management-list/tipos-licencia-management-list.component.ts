import {Component, OnDestroy, OnInit} from '@angular/core';
import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { AppConfirmService } from '../../../../shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from '../../../../shared/services/app-loader/app-loader.service';
import { Subscription } from 'rxjs';
import { egretAnimations } from '../../../../shared/animations/egret-animations';

// Componentes - Modal
import { TiposLicenciaManagementFormComponent } from '../tipos-licencia-management-form/tipos-licencia-management-form.component';

// Servicios
import { TiposLicenciaManagementService } from '../tipos-licencia-management.service';

// Modelo - Clase
import { TipoLicencia } from '../../../../models/tipoLicencia.model';

@Component({
    selector: 'app-tipos-licencia-management-list',
    templateUrl: './tipos-licencia-management-list.component.html',
    styleUrls: ['./tipos-licencia-management-list.component.scss'],
    animations: egretAnimations
})
export class TiposLicenciaManagementListComponent implements OnInit, OnDestroy {

    items: TipoLicencia[];
    getItemSub: Subscription;

    constructor(private dialog: MatDialog,
                private snack: MatSnackBar,
                private confirmService: AppConfirmService,
                private loader: AppLoaderService,
                private tiposLicenciaService: TiposLicenciaManagementService) {
    }

    ngOnInit() {
        this.getTiposLicencia();
    }

    ngOnDestroy(): void {
        if (this.getItemSub) {
            this.getItemSub.unsubscribe();
        }
    }

    getTiposLicencia() {
        /*setTimeout(() => {
            this.loader.open('Cargando...');
        });*/
        this.getItemSub = this.tiposLicenciaService.getAll().subscribe(data => {
            this.items = data;
            this.loader.close();
        },
        error => {
            console.log('error al obtener las licencias');
        });
    }

    openPopUp(data: any = {} , isNew?) {
        let title = isNew ? 'Agregar Tipo de Licencia' : 'Modificar Tipo de Licencia';
        let dialogRef: MatDialogRef<any> = this.dialog.open(TiposLicenciaManagementFormComponent, {
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
                    this.tiposLicenciaService.add(res)
                        .subscribe( data => {
                            // this.items = data;
                            this.getTiposLicencia();
                            this.loader.close();
                            this.snack.open('Member Added!', 'OK', { duration: 4000 });
                        });
                } else {
                    this.tiposLicenciaService.update(data.id, res)
                         .subscribe( data => {
                             // this.items = data;
                             this.getTiposLicencia();
                             this.loader.close();
                             this.snack.open('Member Updated!', 'OK', { duration: 4000 });
                         });
                }
            });
    }

    deleteItem(row) {
        this.confirmService.confirm({message: `Delete ${row.nombre}?`})
            .subscribe(res => {
                if (res) {
                    this.loader.open();
                    this.tiposLicenciaService.delete(row)
                        .subscribe(data => {
                            this.items = data;
                            this.loader.close();
                            this.snack.open('Member deleted!', 'OK', { duration: 4000 });
                        });
                }
            });
    }

}
