import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { Subscription} from 'rxjs';

// Animacion
import { egretAnimations } from '../../../../shared/animations/egret-animations';

// Servicio
import { AppConfirmService } from '../../../../shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from '../../../../shared/services/app-loader/app-loader.service';
import { MarcasManagementService } from '../marcas-management.service';

// Componente
import { MarcasManagementFormComponent } from '../marcas-management-form/marcas-management-form.component';

// Modelo
import { Marca } from '../../../../models/marca.model';

@Component({
    selector: 'app-marcas-management-list',
    templateUrl: './marcas-management-list.component.html',
    styleUrls: ['./marcas-management-list.component.scss'],
    animations: egretAnimations
})
export class MarcasManagementListComponent implements OnInit, OnDestroy {

    items: Marca[];
    getItemSub: Subscription;

    constructor(private dialog: MatDialog,
                private snack: MatSnackBar,
                private confirmService: AppConfirmService,
                private loader: AppLoaderService,
                private marcasService: MarcasManagementService) { }

    ngOnInit() {
        this.getMarcas();
    }

    ngOnDestroy(): void {
        if (this.getItemSub) {
            this.getItemSub.unsubscribe();
        }
    }

    getMarcas() {
        this.getItemSub = this.marcasService.getAll().subscribe(data => {
            this.items = data;
        },
        error => {
            console.log('error al obtener las marcas');
            this.snack.open('Error al cargar los datos', 'OK', { duration: 4000 });
        });
    }

    openPopUp(data: any = {}, isNew?) {
        let title = isNew ? 'Agregar Marca' : 'Modificar Marca';
        let dialogRef: MatDialogRef<any> = this.dialog.open(MarcasManagementFormComponent, {
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
                    this.marcasService.add(res)
                        .subscribe( data => {
                            // this.items = data;
                            this.getMarcas();
                            this.loader.close();
                            this.snack.open('Agregado correctamente', 'OK', { duration: 4000 });
                        });
                } else {
                    this.marcasService.update(data.id, res)
                        .subscribe( data => {
                            // this.items = data;
                            this.getMarcas();
                            this.loader.close();
                            this.snack.open('Modificado correctamente!', 'OK', { duration: 4000 });
                        });
                }
            });
    }



}
