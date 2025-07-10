import { Routes } from '@angular/router';
import { AdminLayoutComponent } from '@layouts/admin-layout/admin-layout.component';

export const routes: Routes = [
    {
        path: 'auth',
        //canActivate: [loginGuard],
        loadChildren: () => import('./auth/auth.routes').then(m => m.routes)
    },
    {
        path: 'admin',
        component: AdminLayoutComponent,
        loadChildren: () => import('./admin/admin.routes').then(m => m.routes)
    },
    {
        path: '**',
        redirectTo: 'auth/login',
    }

];
