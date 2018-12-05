import { TestBed, inject, ComponentFixture } from '@angular/core/testing';
import { PipMediaModule } from 'pip-webui2-layouts';

import { PipEmailVerificationDummyComponent } from './email-verification.component';
import { PipEmailVerificationDummyModule } from './email-verification.module';

describe('a email-verification component', () => {
    let component: PipEmailVerificationDummyComponent;
    let fixture: ComponentFixture<PipEmailVerificationDummyComponent>;

    // register all needed dependencies
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [PipEmailVerificationDummyModule, PipMediaModule.forRoot()]
        });
        fixture = TestBed.createComponent(PipEmailVerificationDummyComponent);
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
