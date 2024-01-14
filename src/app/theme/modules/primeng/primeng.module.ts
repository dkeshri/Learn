import { MenubarModule } from 'primeng/menubar';
import { NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {DividerModule} from 'primeng/divider';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports:[
    InputTextModule,
    ButtonModule,
    DividerModule,
    DropdownModule,
    CheckboxModule
  ],
  providers:[]
})
export class PrimengModule { }
