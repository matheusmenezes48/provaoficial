import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-usuario-modal',
  templateUrl: './usuario-modal.page.html',
  styleUrls: ['./usuario-modal.page.scss'],
})
export class UsuarioModalPage implements OnInit {
  usuario = {
    "nome":"",
    "imagem":""
  }
  constructor(public modalcontroler: ModalController) { }
  atualizar(){
    this.modalcontroler.dismiss(this.usuario)
  }

  ngOnInit() {
  }

}
