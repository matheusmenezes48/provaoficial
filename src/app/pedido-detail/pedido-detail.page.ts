import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pedido-detail',
  templateUrl: './pedido-detail.page.html',
  styleUrls: ['./pedido-detail.page.scss'],
})
export class PedidoDetailPage implements OnInit {
  id;
  pedido;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.id = this.route.snapshot.paramMap.get('id')
    this.pedido = this.http.get("https://5d262d00eeb36400145c59b3.mockapi.io/pedido/" + this.id).subscribe(
      (data) => {
        this.pedido = data
      }
    )
  }

  ngOnInit() {
  }

}
