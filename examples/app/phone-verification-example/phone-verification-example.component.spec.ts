import { TestBed, inject } from '@angular/core/testing';

import {PhoneVerificationDummyExampleComponent } from './phone-verification-example.component';

describe('a signin-example component', () => {
	let component:PhoneVerificationDummyExampleComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PhoneVerificationDummyExampleComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PhoneVerificationDummyExampleComponent], (PhoneVerificationDummyExampleComponent) => {
		component =PhoneVerificationDummyExampleComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});