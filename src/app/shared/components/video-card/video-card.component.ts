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

  ngOnInit(): void {
    let videoId = Util.getYoutubeVideoIdFromUrl(this.video.url);
    this.videoId = videoId;
  }

  ngOnChanges(changes: SimpleChanges):void{
    let videoId = Util.getYoutubeVideoIdFromUrl(this.video.url);
    console.log(videoId);
    this.videoId = videoId;
  }

}
