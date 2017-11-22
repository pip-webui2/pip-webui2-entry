import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { SigninExampleComponent } from './signin-example.component';
import { PipSigninModule } from '../pip-webui2-entry';

@NgModule({
  declarations: [
    SigninExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,

    PipSigninModule
  ],
  exports: [
    SigninExampleComponent
  ],
  providers: [
    
  ],
})
export class SigninExampleModule { }