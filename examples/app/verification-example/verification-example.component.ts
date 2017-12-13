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
	public code: Observable<string>;
	public loading: Observable<boolean>;
	public subtitle: string = "Confirm your email address using verification code <br> <br> If you haven't received the code, press <a href='/#/resend'> resend </a> to send it again.";
	constructor(private router:Router) {

	}
	public ngOnInit() {
		//this.serverUrl$ = new Observable<string>();
		//this.email$ = new Observable<string>();
		//this.password = new Observable<string>();

	}

	public onSubmit(data): void {
		console.log("submit", data);

		this.router.navigateByUrl('reset-example');
	}

	public onAbort(): void {

		console.log("abort");
	}
}