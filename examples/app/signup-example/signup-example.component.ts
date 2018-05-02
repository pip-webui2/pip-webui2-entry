import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'signup-examples',
	templateUrl: 'signup-example.component.html',
	styleUrls: ['signup-example.component.scss']
})

export class SignupExampleComponent {

	public error$: Observable<string>;
	public serverUrl$: Observable<string>;
	public email$: Observable<string>;
	public password: Observable<string>;
	public loading: Observable<boolean>;
	public privacyLink: string = "By clicking Sign up, you agree to the <a href='/#/privacy-example' class='pip-link'> privacy statement </a> and <a href='/#/service-example class='pip-link'> services agreement </a>";
	public signinText: string = "Do you have an account? ";
	public signinLinkText: string = "Sign in here";

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

	public onSignin(): void {
		this.router.navigate(['/signin-example']);
	}
}