import { TestBed, inject } from '@angular/core/testing';

import { PipVerificationComponent } from './verification.component';

describe('a drilldown-list component', () => {
	let component: PipVerificationComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PipVerificationComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PipVerificationComponent], (PipVerificationComponent) => {
		component = PipVerificationComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});