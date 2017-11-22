import { TestBed, inject } from '@angular/core/testing';

import { PipDrilldownListComponent } from './drilldown-list.component';

describe('a drilldown-list component', () => {
	let component: PipDrilldownListComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PipDrilldownListComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([PipDrilldownListComponent], (PipDrilldownListComponent) => {
		component = PipDrilldownListComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});