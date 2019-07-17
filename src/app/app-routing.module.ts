import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'usuario-modal', loadChildren: './usuario-modal/usuario-modal.module#UsuarioModalPageModule' },
  { path: 'lista-pedidos', loadChildren: './lista-pedidos/lista-pedidos.module#ListaPedidosPageModule' },
  { path: 'pedido-detail/:id', loadChildren: './pedido-detail/pedido-detail.module#PedidoDetailPageModule' },
  { path: 'pedido-modal', loadChildren: './pedido-modal/pedido-modal.module#PedidoModalPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
