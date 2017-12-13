import { TestBed, inject } from '@angular/core/testing';

import {RecoveryExampleComponent } from './recovery-example.component';

describe('a signin-example component', () => {
	let component:RecoveryExampleComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				RecoveryExampleComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([RecoveryExampleComponent], (RecoveryExampleComponent) => {
		component =RecoveryExampleComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});