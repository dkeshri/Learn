import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Topic } from '../Models/topic-model';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrl: './add-topic.component.css'
})
export class AddTopicComponent {
  topicForm: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required]],
    url: ['',[Validators.required]],
    token:['',[Validators.required]]
  });
  get topicTitle() {
    return this.topicForm.get('title') as FormControl;
  }
  get topicURL() {
    return this.topicForm.get('url') as FormControl;
  }
  get topicToken() {
    return this.topicForm.get('token') as FormControl;
  }
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: DynamicDialogRef,
    private messageService: MessageService,
    private githubService:GithubService,
    ){
    
  }
  onSave(){
    let topic = {} as Topic;
    topic.title = this.topicForm.controls['title'].value;
    topic.url = this.topicForm.controls['url'].value;
    topic.token = this.topicForm.controls['token'].value;
    this.githubService.getCommitList(topic.token).subscribe((data)=>{
      console.log(data);
    });

    // here we will call github lib.
    this.githubService.saveTopic(topic).subscribe((data)=>{
      console.log(data);
    });
    // when we want to send some data to parent coomponent. here not required
    //this.dialogRef?.close(1);
    this.messageService.add({ severity: 'success', summary: 'Topic Added Successfully', detail: 'Topic Titile', life: 3000 });
  }
}
