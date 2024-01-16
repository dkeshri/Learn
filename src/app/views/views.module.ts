import { NgModule } from '@angular/core';
import { ViewsRoutingModule } from './views-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    ViewsRoutingModule,
  ]
})
export class ViewsModule { }
