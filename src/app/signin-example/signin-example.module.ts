import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipSigninModule } from 'pip-webui2-entry';
import { PipNavModule } from 'pip-webui2-nav-temp';

import { SigninExampleComponent } from './signin-example.component';

@NgModule({
  imports: [
    CommonModule,

    PipNavModule,
    PipSigninModule
  ],
  declarations: [SigninExampleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SigninExampleModule { }
