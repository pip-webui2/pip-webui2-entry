import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PipSigninComponent } from './signin.component';

@NgModule({
  declarations: [
    PipSigninComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  exports: [
    PipSigninComponent
  ],
  providers: [],
})
export class PipSigninModule { }