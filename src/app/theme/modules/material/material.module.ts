import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatDividerModule,
  MatTabsModule,
  MatInputModule,
  FormsModule,
  MatFormFieldModule
]

@NgModule({
  imports: [MATERIAL_MODULES],
  exports:[MATERIAL_MODULES]
})
export class MaterialModule { }
