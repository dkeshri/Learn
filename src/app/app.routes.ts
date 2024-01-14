import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BaseLayoutComponent } from './theme/components/base-layout/base-layout.component';

export const routes: Routes = [
    {
        path:'',
        component:BaseLayoutComponent,
        children:[
            {path:'views', loadChildren:()=>import('./views/views.module').then(module=>module.ViewsModule)},
            {path:'', redirectTo:'views',pathMatch:'full'}     
        ]
    },
    {
    path:'**',
    component:PageNotFoundComponent
    }
];
