import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoadedComponent } from './loaded.component';
import { LoadingComponent } from './loading.component';

@Component({
  selector: 'app-tab3',
  template: `<ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title> Tab 3 </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>

  <ng-container *ngIf="loaded">
    <app-loaded/>
  </ng-container>

   <ng-container *ngIf="!loaded">
    <app-loading/>
   </ng-container>

      <ion-button (click)="loaded = !loaded" expand="full">Toggle</ion-button>
    </ion-content> `,
  styles: [``],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LoadedComponent,
    LoadingComponent,
  ],
})
export class Tab3Page {
  public loaded = false;
  constructor() {}
}
