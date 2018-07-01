import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { PhoneVerificationExampleComponent } from './phone-verification-example.component';
import { PipPhoneVerificationModule } from '../pip-webui2-entry';

@NgModule({
  declarations: [
    PhoneVerificationExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,

    PipPhoneVerificationModule
  ],
  exports: [
    PhoneVerificationExampleComponent
  ],
  providers: [],
})
export class PhoneVerificationExampleModule { }