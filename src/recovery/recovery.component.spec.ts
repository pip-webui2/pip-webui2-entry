import { TestBed, inject } from '@angular/core/testing';

import { PipRecoveryComponent } from './recovery.component';

describe('a drilldown-list component', () => {
	let component: PipRecoveryComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PipRecoveryComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PipRecoveryComponent], (PipRecoveryComponent) => {
		component = PipRecoveryComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});