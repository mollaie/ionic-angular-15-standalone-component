import { enableProdMode, importProvidersFrom } from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { routes } from './app/ROUTES';
import { IonicModule } from '@ionic/angular';
import { provideRouter } from '@angular/router';
import { provideLottieOptions } from 'ngx-lottie';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideLottieOptions({
      player: () => import(/* webpackChunkName: 'lottie-web' */ 'lottie-web'),
    }),
     importProvidersFrom(
        IonicModule.forRoot(),
     )
  ]
  })
  .catch(err=>console.log(err));
