
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, delay, finalize, throwError } from 'rxjs';
import { BlockUiServiceService } from '../../Services/block-ui-service.service';

import { AlertController } from '@ionic/angular';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private blockUI: BlockUiServiceService,
    private alertController: AlertController
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request).pipe(
      finalize(() => {
        this.blockUI.unblock();
      }),
      delay(100),
      catchError(async (httperror: HttpErrorResponse) => {

        if(httperror.status === 400) {
          const alert = await this.alertController.create({
            header: 'Error',
            message: httperror.error.message,
            buttons: ['OK']
          });

          alert.present();
        }
        if(httperror.status === 500) {
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'Ocurrio un error en el servidor, por favor intente mas tarde.',
            buttons: ['OK']
          });

          alert.present();
        }
        if(httperror.status === 403) {
          const alert = await this.alertController.create({
            header: 'Error',
            message: "No tiene permisos para realizar esta accion.",
            buttons: ['OK']
          });

          alert.present();
        }




        return throwError(httperror);
      })
    ) as Observable<HttpEvent<any>>;
  }
}
