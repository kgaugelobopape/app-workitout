import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class MessageHelper {

  message;

  constructor(public toastCtrl: ToastController) { }

  create(message, duration, position) {
    this.message = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: position
    });

    this.message.present();
  }

}
