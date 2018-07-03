import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomBreakPointsProvider } from './custom-breakpoints';
import { MatToolbarModule, MatSelectModule, MatSidenavModule, MatIconModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PipThemesModule } from 'pip-webui2-themes';
//import { PipTestModule } from './pip-webui2-buttons';

import { ExampleListModule } from './examples-list/examples-list.module';
import { AppComponent } from './app.component';
import {
  PipAppbarModule,
  PipSidenavModule, PipMainLayoutModule,
  PipRootLayoutModule, PipRightnavModule
} from 'pip-webui2-layouts';

import { SigninExampleModule } from './signin-example/signin-example.module';
import { SigninExampleComponent } from './signin-example/signin-example.component';

import { SignupExampleModule} from './signup-example/signup-example.module';
import { SignupExampleComponent } from './signup-example/signup-example.component';

import { ResetExampleModule} from './reset-example/reset-example.module';
import { ResetExampleComponent } from './reset-example/reset-example.component';

import { RecoveryExampleModule} from './recovery-example/recovery-example.module';
import { RecoveryExampleComponent } from './recovery-example/recovery-example.component';



import { EmailVerificationExampleModule} from './email-verification-example/email-verification-example.module';
import { EmailVerificationExampleComponent } from './email-verification-example/email-verification-example.component';

import { PhoneVerificationExampleModule} from './phone-verification-example/phone-verification-example.module';
import { PhoneVerificationExampleComponent } from './phone-verification-example/phone-verification-example.component';

const appRoutes: Routes = [
  { path: 'signin-example', component: SigninExampleComponent },
  { path: 'signup-example', component: SignupExampleComponent },
  { path: 'reset-example', component: ResetExampleComponent },
  { path: 'recovery-example', component: RecoveryExampleComponent },
  { path: 'email-verification-example', component: EmailVerificationExampleComponent },
  { path: 'phone-verification-example', component: PhoneVerificationExampleComponent },
  
  { path: '', pathMatch: 'full', redirectTo: 'signin-example' }
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
    SignupExampleModule,
    ResetExampleModule,
    RecoveryExampleModule,
    EmailVerificationExampleModule,
    PhoneVerificationExampleModule, 

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
