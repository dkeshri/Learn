import { Component, OnInit } from '@angular/core';
import { JavascriptContentService } from '../../services/javascript-content.service';
import { CssContentService } from '../../services/css-content.service';
import { OtherContentService } from '../../services/other-content.service';
import { DotnetContentService } from '../../services/dotnet-content.service';
import { Video } from '../../core/models/content.model';
import { HeaderService } from '../../services/header.service';
import { DialogService } from 'primeng/dynamicdialog';
import { AddTopicComponent } from '../add-topic/add-topic.component';
import { LoginComponent } from '../login/login.component';
import { VideoContentService } from '../../services/video-content.service';

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
    private videoContentService:VideoContentService,
    private dialogService: DialogService
    ) { }

   videoList:Video[] = [];
   selectedStack!:string;
   searchedTopic!:string;

  ngOnInit(): void {

    this.videoContentService.getAllFilesName().subscribe((filesName)=>{
      filesName.forEach((fileName)=>{
        this.videoContentService.getAllContent(fileName).subscribe((data)=>{
          this.videoList.push(...data);
        });
      });
    });

    this.headerService.getSelectedStack.subscribe((selectedStack)=>{
      this.selectedStack = selectedStack;
    });
    this.headerService.getSearchedTopic.subscribe((topic)=>{
      this.searchedTopic = topic;
    });
  }

  onShowTopicDialog() {
    const ref = this.dialogService.open(AddTopicComponent, {
      header: 'Add Topic',
      width: '80%'
    });
    ref.onClose.subscribe((isTopicAdded: number) => {
      
    });
  }
  onLogin(){
    const ref = this.dialogService.open(LoginComponent, {
      header: 'Enter PassKey',
      width: '70%'
    });
    ref.onClose.subscribe((isLogin: number) => {
      
    });
  }
}
