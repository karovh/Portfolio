import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  

  ]
})
export class MaterialModule { }
