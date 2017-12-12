import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { ResetExampleComponent } from './reset-example.component';
import { PipResetModule } from '../pip-webui2-entry';

@NgModule({
  declarations: [
    ResetExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,

    PipResetModule
  ],
  exports: [
    ResetExampleComponent
  ],
  providers: [
    
  ],
})
export class ResetExampleModule { }