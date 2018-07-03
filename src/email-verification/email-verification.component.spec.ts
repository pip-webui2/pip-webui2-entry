import { TestBed, inject } from '@angular/core/testing';

import { PipEmailVerificationDummyComponent } from './email-verification.component';

describe('a drilldown-list component', () => {
	let component: PipEmailVerificationDummyComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PipEmailVerificationDummyComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PipEmailVerificationDummyComponent], (PipEmailVerificationDummyComponent) => {
		component = PipEmailVerificationDummyComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});