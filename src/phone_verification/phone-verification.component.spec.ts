import { TestBed, inject } from '@angular/core/testing';

import { PipPhoneVerificationComponent } from './phone-verification.component';

describe('a drilldown-list component', () => {
	let component: PipPhoneVerificationComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PipPhoneVerificationComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PipPhoneVerificationComponent], (PipPhoneVerificationComponent) => {
		component = PipPhoneVerificationComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});