import { TestBed, inject, ComponentFixture } from '@angular/core/testing';
import { PipMediaModule } from 'pip-webui2-layouts';

import { PipSignupComponent } from './signup.component';
import { PipSignupModule } from './signup.module';

describe('a signup component', () => {
    let component: PipSignupComponent;
    let fixture: ComponentFixture<PipSignupComponent>;

    // register all needed dependencies
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [PipSignupModule, PipMediaModule.forRoot()]
        });
        fixture = TestBed.createComponent(PipSignupComponent);
        component = fixture.componentInstance;
    });

    // instantiation through framework injection
    // beforeEach(inject([PipEmailVerificationDummyComponent], (PipEmailVerificationDummyComponent) => {
    //     component = PipEmailVerificationDummyComponent;
    // }));

    it('should have an instance', () => {
        expect(component).toBeDefined();
    });
});
