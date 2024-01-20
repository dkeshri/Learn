import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrl: './add-topic.component.css'
})
export class AddTopicComponent {
  constructor(private dialogRef: DynamicDialogRef,
    private messageService: MessageService,){
    
  }
  onSave(){
    // when we want to send some data to parent coomponent. here not required
    this.dialogRef?.close(1);
    this.messageService.add({ severity: 'success', summary: 'Topic Added Successfully', detail: 'Topic Titile', life: 3000 });
  }
}
