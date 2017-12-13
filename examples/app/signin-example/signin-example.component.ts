import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'signin-example',
	templateUrl: 'signin-example.component.html',
	styleUrls: ['signin-example.component.scss']
})

export class SigninExampleComponent implements OnInit {

	public error$: Observable<string>;
	public serverUrl$: Observable<string>;
	public email$: Observable<string>;
	public password: Observable<string>;
	public loading: Observable<boolean>;
	public forgotLink: string = '/#/recovery-example';
	public signupLink: string = 'Not a member? <a href="/#/signup-example">Sign up</a>';
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