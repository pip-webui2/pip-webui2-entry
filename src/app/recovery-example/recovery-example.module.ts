import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipRecoveryModule } from 'pip-webui2-entry';
import { PipNavModule } from 'pip-webui2-nav-temp';

import { RecoveryExampleComponent } from './recovery-example.component';

@NgModule({
  imports: [
    CommonModule,

    PipNavModule,
    PipRecoveryModule
  ],
  declarations: [RecoveryExampleComponent]
})
export class RecoveryExampleModule { }
