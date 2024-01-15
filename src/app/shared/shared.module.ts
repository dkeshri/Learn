import { NgModule } from '@angular/core';
import { ThemeModule } from '../theme/theme.module';
import { VideoCardComponent } from './components/video-card/video-card.component';



@NgModule({
  declarations: [
    VideoCardComponent
  ],
  imports: [
    ThemeModule
  ],
  exports: [
    ThemeModule,
    VideoCardComponent
  ]
})
export class SharedModule { }
