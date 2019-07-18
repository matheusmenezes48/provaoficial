import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx'; 
import { Storage } from '@ionic/storage';




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
  USUARIO_KEY = 'usuario';

  constructor(public modalcontroler: ModalController, private camera: Camera, public storage:Storage) { }
  atualizar(){
    this.modalcontroler.dismiss(this.usuario)
  
  }

  ngOnInit() {
  }
  foto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }

    this.camera.getPicture(options).then((imageData) => {
      this.usuario.imagem = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      alert(err)
    });
  }
}
