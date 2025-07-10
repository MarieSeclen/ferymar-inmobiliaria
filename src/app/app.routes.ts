import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        //canActivate: [loginGuard],
        loadChildren: () => import('./auth/auth.routes').then(m => m.routes)
    },
    {
        path: '**',
        redirectTo: 'auth/login',
    }

];
