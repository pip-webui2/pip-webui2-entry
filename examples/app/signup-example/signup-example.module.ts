import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { SignupExampleComponent } from './signup-example.component';
import { PipSignupModule } from '../pip-webui2-entry';

@NgModule({
  declarations: [
    SignupExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,

    PipSignupModule
  ],
  exports: [
    SignupExampleComponent
  ],
  providers: [
    
  ],
})
export class SignupExampleModule { }