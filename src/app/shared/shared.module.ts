import { NgModule } from '@angular/core';
import { ThemeModule } from '../theme/theme.module';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { YouTubePlayerModule } from '@angular/youtube-player';


@NgModule({
  declarations: [
    VideoCardComponent
  ],
  imports: [
    ThemeModule,
    YouTubePlayerModule
  ],
  exports: [
    ThemeModule,
    VideoCardComponent,
    YouTubePlayerModule
  ]
})
export class SharedModule { }
