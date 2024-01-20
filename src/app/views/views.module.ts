import { NgModule } from '@angular/core';
import { ViewsRoutingModule } from './views-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AddTopicComponent } from './add-topic/add-topic.component';


@NgModule({
  declarations: [
    HomeComponent,
    AddTopicComponent
  ],
  imports: [
    SharedModule,
    ViewsRoutingModule,
  ]
})
export class ViewsModule { }
