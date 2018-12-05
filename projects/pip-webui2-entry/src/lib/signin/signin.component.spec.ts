import { TestBed, inject, ComponentFixture } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { PipMediaModule } from 'pip-webui2-layouts';

import { PipSigninComponent } from './signin.component';
import { PipSigninModule } from './signin.module';

describe('a signin component', () => {
    let component: PipSigninComponent;
    let fixture: ComponentFixture<PipSigninComponent>;

    // register all needed dependencies
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot(),
                PipMediaModule.forRoot(),

                PipSigninModule
            ]
        });
        fixture = TestBed.createComponent(PipSigninComponent);
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
