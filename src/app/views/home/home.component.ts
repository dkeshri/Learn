import { Component, OnInit } from '@angular/core';
import { JavascriptContentService } from '../../services/javascript-content.service';
import { CssContentService } from '../../services/css-content.service';
import { OtherContentService } from '../../services/other-content.service';
import { DotnetContentService } from '../../services/dotnet-content.service';
import { Video } from '../../core/models/content.model';
import { GithubService } from '../../services/github.service';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(
    private javascriptContent:JavascriptContentService,
    private cssContenetService:CssContentService,
    private otherContentService:OtherContentService,
    private dotnetContentService:DotnetContentService,
    private githubService:GithubService,
    private headerService:HeaderService
    ) { }

   videoList:Video[] = [];
   selectedStack!:string;
   searchedTopic!:string;

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

    // this.githubService.getCommitList().subscribe((data)=>{

    // });
    this.headerService.getSelectedStack.subscribe((selectedStack)=>{
      this.selectedStack = selectedStack;
      console.log(selectedStack);
    })
    this.headerService.getSearchedTopic.subscribe((topic)=>{
      this.searchedTopic = topic;
      console.log(topic);
    })
  }

}
