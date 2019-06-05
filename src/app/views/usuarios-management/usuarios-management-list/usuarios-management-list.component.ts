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

@Component({
    selector: 'app-usuarios-management-list',
    templateUrl: './usuarios-management-list.component.html',
    styleUrls: ['./usuarios-management-list.component.scss'],
    animations: egretAnimations
})
export class UsuariosManagementListComponent implements OnInit {

    items: any[];
    getItemSub: Subscription;

    constructor(private dialog: MatDialog,
                private snack: MatSnackBar,
                private confirmService: AppConfirmService,
                private loader: AppLoaderService,
                private usuariosService: UsuariosManagementService) {
    }

    ngOnInit() {
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
