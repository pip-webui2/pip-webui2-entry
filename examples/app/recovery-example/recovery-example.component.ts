import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'recovery-examples',
	templateUrl: 'recovery-example.component.html',
	styleUrls: ['recovery-example.component.scss']
})

export class RecoveryExampleComponent implements OnInit {

	public error$: Observable<string>;
	public serverUrl$: Observable<string>;
	public email$: Observable<string>;
	public password: Observable<string>;
	public loading: Observable<boolean>;
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