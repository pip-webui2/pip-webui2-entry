import { TestBed, inject } from '@angular/core/testing';

import { SigninExampleComponent } from './signin-example.component';

describe('a signin-example component', () => {
	let component: SigninExampleComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SigninExampleComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SigninExampleComponent], (SigninExampleComponent) => {
		component = SigninExampleComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});