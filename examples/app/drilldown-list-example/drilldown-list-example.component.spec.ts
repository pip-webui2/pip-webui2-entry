import { TestBed, inject } from '@angular/core/testing';

import { DrilldownListExampleComponent } from './drilldown-list-example.component';

describe('a drilldown-list-example component', () => {
	let component: DrilldownListExampleComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				DrilldownListExampleComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([DrilldownListExampleComponent], (DrilldownListExampleComponent) => {
		component = DrilldownListExampleComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});