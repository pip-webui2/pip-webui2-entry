import { TestBed, inject } from '@angular/core/testing';

import {PhoneVerificationExampleComponent } from './phone-verification-example.component';

describe('a signin-example component', () => {
	let component:PhoneVerificationExampleComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PhoneVerificationExampleComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PhoneVerificationExampleComponent], (PhoneVerificationExampleComponent) => {
		component =PhoneVerificationExampleComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});