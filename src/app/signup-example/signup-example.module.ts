import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipSignupModule } from 'pip-webui2-entry';
import { PipNavModule } from 'pip-webui2-nav';

import { SignupExampleComponent } from './signup-example.component';

@NgModule({
  imports: [
    CommonModule,

    PipNavModule,
    PipSignupModule
  ],
  declarations: [SignupExampleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SignupExampleModule { }
