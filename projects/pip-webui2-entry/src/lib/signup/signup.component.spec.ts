import { TestBed, inject } from '@angular/core/testing';

import { PipSignupComponent } from './signup.component';

describe('a drilldown-list component', () => {
	let component: PipSignupComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PipSignupComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PipSignupComponent], (PipSigninComponent) => {
		component = PipSigninComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});