import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProyectsComponent } from "./proyects/proyects.component";
import { BudgetsComponent } from "./budgets/budgets.component";
import { CostCenterComponent } from "./cost-center/cost-center/cost-center.component";

export const routes: Routes = [
    {
        path: '',
        title: 'Inicio',
        component: DashboardComponent
    },
    {
        path: 'proyectos',
        component: ProyectsComponent
    },
    {
        path: 'presupuestos',
        component: BudgetsComponent
    },
    {
        path: 'centro-costos',
        loadChildren: () => import('./cost-center/cost-center.routes').then(m => m.routes)
    }
];