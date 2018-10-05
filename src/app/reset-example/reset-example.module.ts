import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipResetModule } from 'pip-webui2-entry';
import { PipNavModule } from 'pip-webui2-nav-temp';

import { ResetExampleComponent } from './reset-example.component';

@NgModule({
  imports: [
    CommonModule,

    PipNavModule,
    PipResetModule
  ],
  declarations: [ResetExampleComponent]
})
export class ResetExampleModule { }
