import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title> Tab 2 </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-datetime-button datetime="datetime"></ion-datetime-button>

      <ion-modal [keepContentsMounted]="true">
        <ng-template>
          <ion-datetime id="datetime"></ion-datetime>
        </ng-template>
      </ion-modal>
    </ion-content>
  `,
  styles: [``],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class Tab2Page {
  constructor() {}
}
