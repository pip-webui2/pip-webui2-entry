import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'signup-examples',
	templateUrl: 'signup-example.component.html',
	styleUrls: ['signup-example.component.scss']
})

export class SignupExampleComponent implements OnInit {

	public error$: Observable<string>;
	public serverUrl$: Observable<string>;
	public email$: Observable<string>;
	public password: Observable<string>;
	public loading: Observable<boolean>;
	public privacyLink: string = "By clicking Sign up, you agree to the <a href='/#/privacy-example' class='pip-link'> privacy statement </a> and <a href='/#/service-example class='pip-link'> services agreement </a>";
	public signinLink: string = "Do you have an account? <a href='/#/signin-example' class='pip-link'>Sign in here</a>";
	public ngOnInit() {
		//this.serverUrl$ = new Observable<string>();
		//this.email$ = new Observable<string>();
		//this.password = new Observable<string>();

	}

	public onSubmit(data): void {
		console.log("submit", data);
	}

	public onAbort(): void {

		console.log("abort");
	}
}