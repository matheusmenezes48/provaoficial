import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.page.html',
  styleUrls: ['./lista-pedidos.page.scss'],
})
export class ListaPedidosPage implements OnInit {
  pedidos;

  listar() {
    return this.http.get("https://5d262d00eeb36400145c59b3.mockapi.io/pedido/")
  }
  adicionar(pedido) {
    return this.http.post("https://5d262d00eeb36400145c59b3.mockapi.io/pedido/",pedido)
  }
  delete(id){
    return this.http.delete("https://5d262d00eeb36400145c59b3.mockapi.io/pedido/" + id )
  }

  constructor(public modalcontroler: ModalController,private http: HttpClient) { 
    this.listar().subscribe(
      (data) => {
        this.pedidos = data
      },
    )
  }

  ngOnInit() {
  }

}
