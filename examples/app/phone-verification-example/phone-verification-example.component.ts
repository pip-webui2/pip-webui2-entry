import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'phone-verification-examples',
	templateUrl: 'phone-verification-example.component.html',
	styleUrls: ['phone-verification-example.component.scss']
})

export class PhoneVerificationExampleComponent implements OnInit {

	public error$: Observable<string>;
	public serverUrl$: Observable<string>;
	public phone$: Observable<string>;
	public code$: Observable<string>;
	public loading: Observable<boolean>;
	public subtitle: string = "Confirm your phone using verification code"
    public resendText: string = "If you haven't received the code, press ";
    public resendText1: string = 'resend';
    public resendLinkText: string = ' to send it again.';

	constructor(private router:Router) {

	}
	public ngOnInit() {

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
        console.log('on resend');
	}
}