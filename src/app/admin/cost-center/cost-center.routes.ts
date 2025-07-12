import { Routes } from "@angular/router";
import { DimensionsComponent } from "./dimensions/dimensions.component";
import { CostCenterComponent } from "./cost-center/cost-center.component";

export const routes: Routes = [
    {
        path: 'dimensiones',
        component: DimensionsComponent
    },
    {
        path: 'centros',
        component: CostCenterComponent
    },
    {
        path: '',
        redirectTo: 'dimensiones',
        pathMatch: 'full'
    }
];