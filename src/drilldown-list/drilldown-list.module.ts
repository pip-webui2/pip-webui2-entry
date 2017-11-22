import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PipDrilldownListComponent } from './drilldown-list.component';

@NgModule({
  declarations: [
    PipDrilldownListComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  exports: [
    PipDrilldownListComponent
  ],
  providers: [],
})
export class PipDrilldownListModule { }