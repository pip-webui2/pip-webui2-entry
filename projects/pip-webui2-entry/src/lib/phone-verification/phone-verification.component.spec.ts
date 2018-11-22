import { TestBed, inject, ComponentFixture } from '@angular/core/testing';

import { PipPhoneVerificationDummyComponent } from './phone-verification.component';
import { PipPhoneVerificationDummyModule } from './phone-verification.module';

describe('a phone-verification component', () => {
    let component: PipPhoneVerificationDummyComponent;
    let fixture: ComponentFixture<PipPhoneVerificationDummyComponent>;

    // register all needed dependencies
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [PipPhoneVerificationDummyModule]
        });
        fixture = TestBed.createComponent(PipPhoneVerificationDummyComponent);
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
