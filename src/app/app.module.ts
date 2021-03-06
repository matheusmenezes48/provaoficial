import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Camera } from '@ionic-native/camera/ngx';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UsuarioModalPageModule } from './usuario-modal/usuario-modal.module'; 
import { PedidoModalPageModule } from './pedido-modal/pedido-modal.module'; 
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,UsuarioModalPageModule,PedidoModalPageModule,HttpClientModule,IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
