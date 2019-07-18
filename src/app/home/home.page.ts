import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UsuarioModalPage } from '../usuario-modal/usuario-modal.page';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario = {
    "nome":"Matheus",
    "imagem":"https://f.i.uol.com.br/fotografia/2019/03/15/15526795065c8c025270c53_1552679506_4x3_sm.jpg"
  }

  constructor(public modalController: ModalController, public storage: Storage)  {
    this.storage.get('usuario').then((data) => {
      if (data) {
        this.usuario = data
      };
    });
  }

  async modal(){
    const modal = await this.modalController.create({
      component: UsuarioModalPage
    });
    await modal.present();

    modal.onDidDismiss().then((perfil) => {
      this.usuario = perfil.data
      this.storage.set("usuario", this.usuario)

    })
  }

}
