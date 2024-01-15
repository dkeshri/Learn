import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.css'
})
export class VideoCardComponent implements OnInit {

  constructor() { }
  videoId:string = 'uUyWTjY0svw';
  ngOnInit(): void {
  }

}
