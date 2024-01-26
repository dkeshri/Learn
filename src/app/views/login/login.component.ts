import { Component } from '@angular/core';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { AppConstant } from '../../core/models/app-constant';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  passKey:string = '';
  constructor(private localStorageService:LocalStorageService,
    private dialogRef: DynamicDialogRef){

  }
  onLogin(){
    this.localStorageService.set(AppConstant.PASSKEY,this.passKey);
    this.dialogRef?.close(1);
  }
}
