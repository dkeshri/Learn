import { Component, OnInit } from '@angular/core';
import { VideoContentService } from '../../services/video-content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private videoContentService: VideoContentService) { }

  ngOnInit(): void {
    console.log(this.videoContentService.getAllContent());
  }

}
