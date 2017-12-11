import { TestBed, inject } from '@angular/core/testing';

import { PipResetComponent } from './reset.component';

describe('a drilldown-list component', () => {
	let component: PipResetComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PipResetComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PipResetComponent], (PipResetComponent) => {
		component = PipResetComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});