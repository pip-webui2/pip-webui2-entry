import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { EmailVerificationDummyExampleComponent } from './email-verification-example.component';
import { PipEmailVerificationDummyModule } from '../pip-webui2-entry';

@NgModule({
  declarations: [
    EmailVerificationDummyExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,

    PipEmailVerificationDummyModule
  ],
  exports: [
    EmailVerificationDummyExampleComponent
  ],
  providers: [],
})
export class EmailVerificationDummyExampleModule { }