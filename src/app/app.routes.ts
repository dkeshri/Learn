import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path:'views', loadChildren:()=>import('./views/views.module').then(module=>module.ViewsModule)
    },
    {
        path:'', redirectTo:'views',pathMatch:'full'
    },
    {
    path:'**',
    component:PageNotFoundComponent
    }
];
