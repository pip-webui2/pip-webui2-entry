import { TestBed, inject } from '@angular/core/testing';

import { SignupExampleComponent } from './signup-example.component';

describe('a signin-example component', () => {
	let component: SignupExampleComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SignupExampleComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SignupExampleComponent], (SignupExampleComponent) => {
		component = SignupExampleComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});