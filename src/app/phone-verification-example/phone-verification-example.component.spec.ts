import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';

import { PhoneVerificationExampleComponent } from './phone-verification-example.component';
import { PhoneVerificationExampleModule } from './phone-verification-example.module';

describe('PhoneVerificationExampleComponent', () => {
  let component: PhoneVerificationExampleComponent;
  let fixture: ComponentFixture<PhoneVerificationExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        RouterModule.forRoot([]),
        TranslateModule.forRoot(),

        PhoneVerificationExampleModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneVerificationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
