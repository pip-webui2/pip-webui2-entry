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
import { PipCardLayoutModule, PipShadowModule } from 'pip-webui2-layouts';

import { PipSignupComponent } from './signup.component';

@NgModule({
  declarations: [
    PipSignupComponent
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
    PipSignupComponent
  ],
  providers: [],
})
export class PipSignupModule { }
