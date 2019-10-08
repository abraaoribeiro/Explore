import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(public toastController: ToastController, private localNotifications: LocalNotifications) { }

  public async presentToastWithOptions(messge: string) {
    const toast = await this.toastController.create({
      duration: 4000,
      message: messge,
      color: 'secondary',
      mode: 'ios',
      position: 'top',
      buttons: [{
        icon: 'close',
        role: 'cancel',
        handler: () => { }
      }]
    });
    toast.present();
  }

  public localNotification(titulo: string, dateTime?: Date, text?: string, img?: string) {
    this.localNotifications.schedule({
      title: titulo,
      text: text,
      icon: 'assets/icon/favicon.png',
      trigger: { at: dateTime },
      attachments: [img],
      led: "FF0000",
      sound: 'file://sound.mp3',
      foreground: true
    });
  }

}
