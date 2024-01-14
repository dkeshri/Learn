import { Component, OnInit } from '@angular/core';
import { VideoContentService } from '../../services/video-content.service';
import { JavascriptContentService } from '../../services/javascript-content.service';
import { CssContentService } from '../../services/css-content.service';
import { OtherContentService } from '../../services/other-content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private videoContentService: VideoContentService,
    private javascriptContent:JavascriptContentService,
    private cssContenetService:CssContentService,
    private otherContentService:OtherContentService,
    private dotnetContentService:OtherContentService
    ) { }

  ngOnInit(): void {
    console.log(this.videoContentService.getAllContent());
    this.javascriptContent.getAllContent().subscribe((data)=>{
      console.log(data);
    });
    this.cssContenetService.getAllContent().subscribe((data)=>{
      console.log(data);
    });
    this.otherContentService.getAllContent().subscribe((data)=>{
      console.log(data);
    });
    this.dotnetContentService.getAllContent().subscribe((data)=>{
      console.log(data);
    });
  }

}
