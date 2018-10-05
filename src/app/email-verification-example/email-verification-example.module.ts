import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipEmailVerificationDummyModule } from 'pip-webui2-entry';
import { PipNavModule } from 'pip-webui2-nav-temp';

import { EmailVerificationExampleComponent } from './email-verification-example.component';

@NgModule({
  imports: [
    CommonModule,

    PipNavModule,
    PipEmailVerificationDummyModule
  ],
  declarations: [EmailVerificationExampleComponent]
})
export class EmailVerificationExampleModule { }
