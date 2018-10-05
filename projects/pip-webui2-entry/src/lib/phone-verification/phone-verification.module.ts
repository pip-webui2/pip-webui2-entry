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
import { PipCardLayoutModule, PipMediaModule, PipShadowModule } from 'pip-webui2-layouts-temp';

import { PipPhoneVerificationDummyComponent } from './phone-verification.component';

@NgModule({
  declarations: [
    PipPhoneVerificationDummyComponent
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
    PipPhoneVerificationDummyComponent
  ],
  providers: [],
})
export class PipPhoneVerificationDummyModule { }
