import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  template: `
    <ion-tabs [environmentInjector]="environmentInjector">
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1">
          <ion-icon name="triangle"></ion-icon>
          <ion-label>Tab 1</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2">
          <ion-icon name="ellipse"></ion-icon>
          <ion-label>Tab 2</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3">
          <ion-icon name="square"></ion-icon>
          <ion-label>Tab 3</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  `,
  styles: [``],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class TabsPage {
  constructor(public environmentInjector: EnvironmentInjector) {}
}
