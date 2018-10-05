import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipPhoneVerificationDummyModule } from 'pip-webui2-entry';
import { PipNavModule } from 'pip-webui2-nav-temp';

import { PhoneVerificationExampleComponent } from './phone-verification-example.component';

@NgModule({
  imports: [
    CommonModule,

    PipNavModule,
    PipPhoneVerificationDummyModule
  ],
  declarations: [PhoneVerificationExampleComponent]
})
export class PhoneVerificationExampleModule { }
