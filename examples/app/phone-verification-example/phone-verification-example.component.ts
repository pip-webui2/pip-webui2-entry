import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
	selector: 'phone-verification-examples',
	templateUrl: 'phone-verification-example.component.html',
	styleUrls: ['phone-verification-example.component.scss']
})

export class PhoneVerificationDummyExampleComponent implements OnInit {

	public error$: Observable<string>;
	public serverUrl$: Observable<string>;
	public phone$: Observable<string>;
    public code$: Observable<string>;
    public showSuccess$: BehaviorSubject<boolean>;
	public loading: Observable<boolean>;
	public subtitle: string = "Confirm your phone using verification code";
    public resendText: string = "If you haven't received the code, press ";
    public resendText1: string = 'resend';
    public resendLinkText: string = ' to send it again.';
    public success: string = 'Code send success';

	constructor(private router:Router) {

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
        if (!data && !data.ph) {

            return;
        }
        console.log('resend');
        setTimeout(() => {
            this.showSuccess$.next(true);
        }, 1000);
	}
}