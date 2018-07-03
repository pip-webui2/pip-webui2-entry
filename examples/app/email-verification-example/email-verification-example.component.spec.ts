import { TestBed, inject } from '@angular/core/testing';

import {VerificationExampleComponent } from './email-verification-example.component';

describe('a signin-example component', () => {
	let component:VerificationExampleComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				VerificationExampleComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([VerificationExampleComponent], (VerificationExampleComponent) => {
		component =VerificationExampleComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});