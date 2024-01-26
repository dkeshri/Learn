import { Component, OnInit } from '@angular/core';
import { JavascriptContentService } from '../../services/javascript-content.service';
import { CssContentService } from '../../services/css-content.service';
import { OtherContentService } from '../../services/other-content.service';
import { DotnetContentService } from '../../services/dotnet-content.service';
import { Video } from '../../core/models/content.model';
import { HeaderService } from '../../services/header.service';
import { DialogService } from 'primeng/dynamicdialog';
import { AddTopicComponent } from '../add-topic/add-topic.component';
import { GithubService } from '../../services/github.service';
import { Topic } from '../Models/topic-model';

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
    private headerService:HeaderService,
    private dialogService: DialogService,
    private githubService:GithubService
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
    this.headerService.getSelectedStack.subscribe((selectedStack)=>{
      this.selectedStack = selectedStack;
    });
    this.headerService.getSearchedTopic.subscribe((topic)=>{
      this.searchedTopic = topic;
    });

    this.githubService.testApi().subscribe((data)=>{
      console.log(data);
    });
    // this.githubService.getRootContentByBranchName().subscribe((data)=>{
    //   console.log(data);
    // });
  }

  onShowTopicDialog() {
    const ref = this.dialogService.open(AddTopicComponent, {
      header: 'Add Topic',
      width: '70%'
    });
    ref.onClose.subscribe((unitId: number) => {
      
    });
  }
}
