import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { VerificationExampleComponent } from './verification-example.component';
import { PipVerificationModule } from '../pip-webui2-entry';

@NgModule({
  declarations: [
    VerificationExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,

    PipVerificationModule
  ],
  exports: [
    VerificationExampleComponent
  ],
  providers: [],
})
export class VerificationExampleModule { }