import { TestBed, inject } from '@angular/core/testing';

import { PipEmailVerificationComponent } from './email-verification.component';

describe('a drilldown-list component', () => {
	let component: PipEmailVerificationComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PipEmailVerificationComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PipEmailVerificationComponent], (PipEmailVerificationComponent) => {
		component = PipEmailVerificationComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});