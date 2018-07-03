import { TestBed, inject } from '@angular/core/testing';

import { PipPhoneVerificationDummyComponent } from './phone-verification.component';

describe('a drilldown-list component', () => {
	let component: PipPhoneVerificationDummyComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PipPhoneVerificationDummyComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PipPhoneVerificationDummyComponent], (PipPhoneVerificationDummyComponent) => {
		component = PipPhoneVerificationDummyComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});