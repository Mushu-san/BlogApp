import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class BlockUiServiceService {

  blockers = 0;
  loading!: HTMLIonLoadingElement;

  constructor(
    private loadingCtrl: LoadingController
  ) { }

  async block() {
    this.blockers++;
    this.loading = await this.loadingCtrl.create({
      message: 'Loading...',
    });

    await this.loading.present();
  }


    unblock() {
    if (--this.blockers <= 0) {
      this.loading.dismiss();
      this.blockers = 0;
    }


  }
}
