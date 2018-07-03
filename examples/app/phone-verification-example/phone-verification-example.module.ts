import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { PhoneVerificationDummyExampleComponent } from './phone-verification-example.component';
import { PipPhoneVerificationDummyModule } from '../pip-webui2-entry';

@NgModule({
  declarations: [
    PhoneVerificationDummyExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,

    PipPhoneVerificationDummyModule
  ],
  exports: [
    PhoneVerificationDummyExampleComponent
  ],
  providers: [],
})
export class PhoneVerificationDummyExampleModule { }