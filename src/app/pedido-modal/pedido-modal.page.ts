import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-pedido-modal',
  templateUrl: './pedido-modal.page.html',
  styleUrls: ['./pedido-modal.page.scss'],
})
export class PedidoModalPage implements OnInit {
  novo_pedido = {
    "id": "",
    "createdAt": "",
    "prato": "",
    "data": "",
    "tamanho": "",
    "valor":""
  }
  constructor(public modalController: ModalController) { }


  ngOnInit() {
  }
  add() {
    this.modalController.dismiss(this.novo_pedido)
  }

}
