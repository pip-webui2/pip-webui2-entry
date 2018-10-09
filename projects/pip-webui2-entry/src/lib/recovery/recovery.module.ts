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
import { PipCardLayoutModule, PipMediaModule, PipShadowModule } from 'pip-webui2-layouts';

import { PipRecoveryComponent } from './recovery.component';

@NgModule({
  declarations: [
    PipRecoveryComponent
  ],
  imports: [
    PipCardLayoutModule, PipMediaModule, PipShadowModule,

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
    PipRecoveryComponent
  ],
  providers: [],
})
export class PipRecoveryModule { }
