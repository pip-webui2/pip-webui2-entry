import { TestBed, inject, ComponentFixture } from '@angular/core/testing';
import { PipMediaModule } from 'pip-webui2-layouts';

import { PipRecoveryComponent } from './recovery.component';
import { PipRecoveryModule } from './recovery.module';

describe('a recovery component', () => {
    let component: PipRecoveryComponent;
    let fixture: ComponentFixture<PipRecoveryComponent>;

    // register all needed dependencies
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [PipRecoveryModule, PipMediaModule.forRoot()]
        });
        fixture = TestBed.createComponent(PipRecoveryComponent);
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
