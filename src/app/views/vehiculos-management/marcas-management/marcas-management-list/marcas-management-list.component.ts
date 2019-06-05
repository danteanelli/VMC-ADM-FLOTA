import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { AppConfirmService } from '../../../../shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from '../../../../shared/services/app-loader/app-loader.service';
import { Subscription} from 'rxjs';
import { egretAnimations } from '../../../../shared/animations/egret-animations';

// Servicio
import { MarcasManagementService } from '../marcas-management.service';

// Componente
import { MarcasManagementFormComponent } from '../marcas-management-form/marcas-management-form.component';

@Component({
    selector: 'app-marcas-management-list',
    templateUrl: './marcas-management-list.component.html',
    styleUrls: ['./marcas-management-list.component.scss'],
    animations: egretAnimations
})
export class MarcasManagementListComponent implements OnInit {

    items: any[];
    getItemSub: Subscription;

    constructor(private dialog: MatDialog,
                private snack: MatSnackBar,
                private confirmService: AppConfirmService,
                private loader: AppLoaderService,
                private marcasService: MarcasManagementService) { }

    ngOnInit() {
    }

    openPopUp(data: any = {}, isNew?) {
        let title = isNew ? 'Agregar Marca' : 'Modificar Marca';
        let dialogRef: MatDialogRef<any> = this.dialog.open(MarcasManagementFormComponent, {
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
