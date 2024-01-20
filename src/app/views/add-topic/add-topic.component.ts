import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrl: './add-topic.component.css'
})
export class AddTopicComponent {
  unitForm: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required]],
    url: ['',[Validators.required]],
    token:['',[Validators.required]]
  });
  get topicTitle() {
    return this.unitForm.get('title') as FormControl;
  }
  get topicURL() {
    return this.unitForm.get('url') as FormControl;
  }
  get topicToken() {
    return this.unitForm.get('token') as FormControl;
  }
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: DynamicDialogRef,
    private messageService: MessageService,){
    
  }
  onSave(){
    // when we want to send some data to parent coomponent. here not required
    this.dialogRef?.close(1);
    this.messageService.add({ severity: 'success', summary: 'Topic Added Successfully', detail: 'Topic Titile', life: 3000 });
  }
}
