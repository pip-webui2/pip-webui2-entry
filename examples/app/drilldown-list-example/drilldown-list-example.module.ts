import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { DrilldownListExampleComponent } from './drilldown-list-example.component';
import { PipDrilldownListModule } from '../pip-webui2-entry';

@NgModule({
  declarations: [
    DrilldownListExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,

    PipDrilldownListModule
  ],
  exports: [
    DrilldownListExampleComponent
  ],
  providers: [
    
  ],
})
export class DrilldownListExampleModule { }