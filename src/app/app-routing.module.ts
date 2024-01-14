import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './theme/components/base-layout/base-layout.component';
import { PageNotFoundComponent } from './theme/components/page-not-found/page-not-found.component';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
