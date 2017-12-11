import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { PipResetComponent } from './reset.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material';

import { PipCardLayoutModule, PipMediaModule, PipShadowModule } from 'pip-webui2-layouts';

@NgModule({
  declarations: [
    PipResetComponent
  ],
  imports: [
    PipCardLayoutModule, PipMediaModule, PipShadowModule,
    
    BrowserModule,
    FlexLayoutModule,

    FormsModule,
    HttpModule,
    CommonModule,

    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatProgressBarModule
  ],
  exports: [
    PipResetComponent
  ],
  providers: [],
})
export class PipResetModule { }