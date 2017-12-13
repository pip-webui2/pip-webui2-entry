import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { RecoveryExampleComponent } from './recovery-example.component';
import { PipRecoveryModule } from '../pip-webui2-entry';

@NgModule({
  declarations: [
    RecoveryExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,

    PipRecoveryModule
  ],
  exports: [
    RecoveryExampleComponent
  ],
  providers: [],
})
export class RecoveryExampleModule { }