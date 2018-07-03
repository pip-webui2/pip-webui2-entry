import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
    selector: 'email-verification-examples',
    templateUrl: 'email-verification-example.component.html',
    styleUrls: ['email-verification-example.component.scss']
})

export class EmailVerificationDummyExampleComponent implements OnInit {
    public error$: Observable<string>;
    public serverUrl$: Observable<string>;
    public email$: Observable<string>;
    public code$: Observable<string>;
    public showSuccess$: BehaviorSubject<boolean>;
    public loading: Observable<boolean>;
    public subtitle: string = "Confirm your email address using verification code"
    public resendText: string = "If you haven't received the code, press ";
    public resendText1: string = 'resend';
    public resendLinkText: string = ' to send it again.';
    public success: string = 'Code send success';

    constructor(
        private router: Router
    ) {

    }

    public ngOnInit() {
		this.showSuccess$ = new BehaviorSubject(false);
    }

    public onSubmit(data): void {
        console.log("submit", data);
    }

    public onAbort(): void {
        console.log("abort");
    }

    public onResend(data): void {
        if (!data && !data.email) {

            return;
        }
        console.log('resend');
        setTimeout(() => {
            this.showSuccess$.next(true);
        }, 1000);
    }
}