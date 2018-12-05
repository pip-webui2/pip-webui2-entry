import { TestBed, inject, ComponentFixture } from '@angular/core/testing';
import { PipMediaModule } from 'pip-webui2-layouts';

import { PipResetComponent } from './reset.component';
import { PipResetModule } from './reset.module';

describe('a reset component', () => {
    let component: PipResetComponent;
    let fixture: ComponentFixture<PipResetComponent>;

    // register all needed dependencies
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [PipResetModule, PipMediaModule.forRoot()]
        });
        fixture = TestBed.createComponent(PipResetComponent);
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
