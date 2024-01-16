import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Video } from '../../../core/models/content.model';
import { Util } from '../../../core/Util/Util';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.css'
})
export class VideoCardComponent implements OnInit {

  @Input({ required: true })
  video!: Video;
  constructor() { }
  videoId:string = '';
  videoTitle:string = '';

  ngOnInit(): void {
    let videoId = Util.getYoutubeVideoIdFromUrl(this.video.url);
    this.setPropertyToVideoCard(videoId,this.video.title);
  }

  ngOnChanges(changes: SimpleChanges):void{
    let videoId = Util.getYoutubeVideoIdFromUrl(this.video.url);
    this.setPropertyToVideoCard(videoId,this.video.title);
  }

  private setPropertyToVideoCard(videoId:string,videoTitle:string){
    this.videoId = videoId;
    this.videoTitle = videoTitle;
  }

}
