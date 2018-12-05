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
  MatProgressBarModule,
} from '@angular/material';
import { PipCardLayoutModule, PipShadowModule } from 'pip-webui2-layouts';

import { PipResetComponent } from './reset.component';

@NgModule({
  declarations: [
    PipResetComponent
  ],
  imports: [
    PipCardLayoutModule, PipShadowModule,

    FlexLayoutModule,

    FormsModule,
    HttpClientModule,
    CommonModule,

    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatProgressBarModule
  ],
  exports: [
    PipResetComponent
  ],
  providers: [],
})
export class PipResetModule { }
