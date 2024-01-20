import { MenubarModule } from 'primeng/menubar';
import { NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {DividerModule} from 'primeng/divider';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import {DialogService, DynamicDialogConfig, DynamicDialogModule, DynamicDialogRef} from 'primeng/dynamicdialog';
@NgModule({
  declarations: [],
  imports: [
  ],
  exports:[
    InputTextModule,
    ButtonModule,
    DividerModule,
    DropdownModule,
    CheckboxModule,
    DynamicDialogModule
  ],
  providers:[DialogService,DynamicDialogRef,DynamicDialogConfig]
})
export class PrimengModule { }
