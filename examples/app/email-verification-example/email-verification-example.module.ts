import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { EmailVerificationExampleComponent } from './email-verification-example.component';
import { PipEmailVerificationModule } from '../pip-webui2-entry';

@NgModule({
  declarations: [
    EmailVerificationExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,

    PipEmailVerificationModule
  ],
  exports: [
    EmailVerificationExampleComponent
  ],
  providers: [],
})
export class EmailVerificationExampleModule { }