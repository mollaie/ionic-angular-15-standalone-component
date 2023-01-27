import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  template: ` <ion-list>
    <ion-list-header>Albums</ion-list-header>
    <ion-item>
      <ion-thumbnail slot="start">
        <ion-icon
          style="width: 100%; height: 100%"
          name="musical-notes"
        ></ion-icon>
      </ion-thumbnail>
      <ion-label>
        <h3>Abbey Road</h3>
        <p>The Beatles</p>
        <p>1969</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-thumbnail slot="start">
        <ion-icon
          style="width: 100%; height: 100%"
          name="musical-notes"
        ></ion-icon>
      </ion-thumbnail>
      <ion-label>
        <h3>Abbey Road</h3>
        <p>The Beatles</p>
        <p>1969</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-thumbnail slot="start">
        <ion-icon
          style="width: 100%; height: 100%"
          name="musical-notes"
        ></ion-icon>
      </ion-thumbnail>
      <ion-label>
        <h3>Abbey Road</h3>
        <p>The Beatles</p>
        <p>1969</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-thumbnail slot="start">
        <ion-icon
          style="width: 100%; height: 100%"
          name="musical-notes"
        ></ion-icon>
      </ion-thumbnail>
      <ion-label>
        <h3>Abbey Road</h3>
        <p>The Beatles</p>
        <p>1969</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-thumbnail slot="start">
        <ion-icon
          style="width: 100%; height: 100%"
          name="musical-notes"
        ></ion-icon>
      </ion-thumbnail>
      <ion-label>
        <h3>Abbey Road</h3>
        <p>The Beatles</p>
        <p>1969</p>
      </ion-label>
    </ion-item>
  </ion-list>`,
  selector: 'app-loaded',
  imports: [IonicModule],
})
export class LoadedComponent {}
