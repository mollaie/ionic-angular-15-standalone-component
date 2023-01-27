import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-tab1',
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title> Tab 1 </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-item lines="full">
        <ion-icon slot="start" name="moon"></ion-icon>
        <ion-label> Toggle Dark Theme </ion-label>
        <ion-toggle [checked]="toggle" slot="end" (ionChange)="changeTheme()"></ion-toggle>
      </ion-item>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Card Title</ion-card-title>
          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          Here's a small text description for the card content. Nothing more,
          nothing less.

          <ng-lottie [options]="options"></ng-lottie>

          <ion-button (click)="changeAnimation()" expand="full"
            >Update it</ion-button
          >
        </ion-card-content>
      </ion-card>
    </ion-content>
  `,
  styles: [``],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, LottieComponent],
})
export class Tab1Page {
  public toggle:boolean = false;
  public options: AnimationOptions = {
    path: '/assets/animation.json',
  };


  constructor() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.toggle = prefersDark.matches;

  }

  public changeAnimation() {
    this.options = {
      ...this.options,
      path: '/assets/second-animation.json',
    };
  }

  public changeTheme(){
    this.toggle = !this.toggle;
    document.body.classList.toggle('dark',this.toggle);
  }
}
