import { Component, OnInit } from '@angular/core';
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

@Component({
    selector: 'app-perfiles-management-list',
    templateUrl: './perfiles-management-list.component.html',
    styleUrls: ['./perfiles-management-list.component.scss'],
    animations: egretAnimations
})
export class PerfilesManagementListComponent implements OnInit {

    items: any[];
    getItemSub: Subscription;

    constructor(private dialog: MatDialog,
                private snack: MatSnackBar,
                private confirmService: AppConfirmService,
                private loader: AppLoaderService,
                private perfilesService: PerfilesManagementService) {
    }

    ngOnInit() {
    }

    openPopUp(data: any = {}, isNew?) {
        let title = isNew ? 'Agregar Perfil' : 'Modificar Perfil';
        let dialogRef: MatDialogRef<any> = this.dialog.open(PerfilesManagementFormComponent, {
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
