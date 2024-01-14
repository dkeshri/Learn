import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const COMMON_MODULE = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule
]

@NgModule({
  declarations: [
    BaseLayoutComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
  ],
  imports: [
    ...COMMON_MODULE,
  ],
  exports:[
    ...COMMON_MODULE,
    BaseLayoutComponent 
  ]
})
export class ThemeModule { }
