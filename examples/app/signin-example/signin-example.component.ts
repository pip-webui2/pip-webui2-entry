import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'signin-example',
	templateUrl: 'signin-example.component.html',
	styleUrls: ['signin-example.component.scss']
})

export class SigninExampleComponent {

	public error$: Observable<string>;
	public serverUrl$: Observable<string>;
	public email$: Observable<string>;
	public password: Observable<string>;
	public loading: Observable<boolean>;

	public forgotTitle: string = 'Forgot password?';
    public signupText: string = "Not a member?";
	public signupLinkText: string = "Sign up here";

	public constructor(
		private router: Router
	) {

	}

	public ngOnInit() {

	}

	public onSubmit(data): void {
		console.log("submit", data);
	}

	public onAbort(): void {
		console.log("abort");
	}

	public onForgot(): void {
		this.router.navigate(['/recovery-example']);
	}

	public onSignup(): void {
		this.router.navigate(['/signup-example']);
	}
}