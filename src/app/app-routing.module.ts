import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmailVerificationExampleComponent } from './email-verification-example/email-verification-example.component';
import { PhoneVerificationExampleComponent } from './phone-verification-example/phone-verification-example.component';
import { RecoveryExampleComponent } from './recovery-example/recovery-example.component';
import { ResetExampleComponent } from './reset-example/reset-example.component';
import { SigninExampleComponent } from './signin-example/signin-example.component';
import { SignupExampleComponent } from './signup-example/signup-example.component';

const appRoutes: Routes = [
    { path: 'signin-example', component: SigninExampleComponent },
    { path: 'signup-example', component: SignupExampleComponent },
    { path: 'reset-example', component: ResetExampleComponent },
    { path: 'recovery-example', component: RecoveryExampleComponent },
    { path: 'email-verification-example', component: EmailVerificationExampleComponent },
    { path: 'phone-verification-example', component: PhoneVerificationExampleComponent },

    { path: '**', redirectTo: 'signin-example' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
