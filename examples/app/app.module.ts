import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomBreakPointsProvider } from './custom-breakpoints';
import { MatToolbarModule, MatSelectModule, MatSidenavModule, MatIconModule,MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PipThemesModule } from 'pip-webui2-themes';
//import { PipTestModule } from './pip-webui2-buttons';

import { ExampleListModule } from './examples-list/examples-list.module';
import { AppComponent } from './app.component';
import {PipAppbarModule,
  PipSidenavModule, PipMainLayoutModule,
  PipRootLayoutModule, PipRightnavModule} from 'pip-webui2-layouts';

import { SigninExampleModule } from './signin-example/signin-example.module';

import { SigninExampleComponent } from './signin-example/signin-example.component';

const appRoutes: Routes = [
  { path: 'signin-examples', component: SigninExampleComponent },
  { path: '', pathMatch: 'full', redirectTo: 'signin-examples' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatSelectModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    
    PipThemesModule,

    ExampleListModule,
    SigninExampleModule,

    PipAppbarModule,
    PipSidenavModule, 
    PipMainLayoutModule,
    PipRootLayoutModule,
    PipRightnavModule,

    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
 