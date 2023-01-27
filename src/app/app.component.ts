import { Component, NgZone, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';
import { Network } from '@capacitor/network';
import { IonicModule, IonicRouteStrategy, ToastController } from '@ionic/angular';
import { SharedStateService } from './services/shared-state.service';

@Component({
  selector: 'app-root',
  template: `<ion-app>
    <ion-router-outlet></ion-router-outlet>
  </ion-app> `,
  styles: [``],
  standalone: true,
  imports: [IonicModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
})
export class AppComponent implements OnInit{

  constructor(
    private readonly ngZone: NgZone,
    private readonly sharedStatusService:SharedStateService,
    private readonly toastCtrl : ToastController
  ) {}

  async ngOnInit(): Promise<void> {
    Network.addListener("networkStatusChange", (status) => {
      this.ngZone.run(() => {
        this.sharedStatusService.SetNetworkStatue(status.connected ? "Online" : "Offline");
      });



      this.sharedStatusService.NetworkStatus$.subscribe(async (status:string)=>{
          const toas = await this.toastCtrl.create({
              animated:true,
              buttons:[
                {
                  text:'Ok',
                  role:'cancel'
                }
              ],
              message:`Network status is ${status}`
          });

          await toas.present();
      })
    });
  }
}
