import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatInputModule,
  MatSelectModule,
  MatProgressBarModule
} from '@angular/material';
import { PipCardLayoutModule, PipMediaModule, PipShadowModule } from 'pip-webui2-layouts';

import { PipSigninComponent } from './signin.component';

@NgModule({
  declarations: [
    PipSigninComponent
  ],
  imports: [
    PipCardLayoutModule, PipMediaModule, PipShadowModule,
    CommonModule,
    FlexLayoutModule,

    FormsModule,
    HttpClientModule,

    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatProgressBarModule
  ],
  exports: [
    PipSigninComponent
  ],
  providers: [],
})
export class PipSigninModule { }
