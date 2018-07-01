import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'verification-examples',
	templateUrl: 'verification-example.component.html',
	styleUrls: ['verification-example.component.scss']
})

export class VerificationExampleComponent implements OnInit {
	public error$: Observable<string>;
	public serverUrl$: Observable<string>;
	public email$: Observable<string>;
	public code$: Observable<string>;
	public loading: Observable<boolean>;
	public subtitle: string = "Confirm your email address using verification code"
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