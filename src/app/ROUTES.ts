import { Route, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./pages/tabs/ROUTES').then((m) =>m.routes),
  },
 ];
