import { Component, OnInit } from '@angular/core';
import { VideoContentService } from '../../services/video-content.service';
import { JavascriptContentService } from '../../services/javascript-content.service';
import { CssContentService } from '../../services/css-content.service';
import { OtherContentService } from '../../services/other-content.service';
import { DotnetContentService } from '../../services/dotnet-content.service';
import { Video } from '../../core/models/content.model';

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
    private dotnetContentService:DotnetContentService
    ) { }

   videoList:Video[] = [];

  ngOnInit(): void {

    this.javascriptContent.getAllContent().subscribe((data)=>{
      this.videoList.push(...data);
    });
    this.cssContenetService.getAllContent().subscribe((data)=>{
      this.videoList.push(...data);
    });
    this.otherContentService.getAllContent().subscribe((data)=>{
      this.videoList.push(...data);
    });
    this.dotnetContentService.getAllContent().subscribe((data)=>{
      this.videoList.push(...data);
    });
  }

}
