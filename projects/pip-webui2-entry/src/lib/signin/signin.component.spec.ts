import { TestBed, inject } from '@angular/core/testing';

import { PipSigninComponent } from './signin.component';

describe('a drilldown-list component', () => {
	let component: PipSigninComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PipSigninComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PipSigninComponent], (PipSigninComponent) => {
		component = PipSigninComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});