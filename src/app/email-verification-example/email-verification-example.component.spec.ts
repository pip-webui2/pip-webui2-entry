import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';

import { EmailVerificationExampleComponent } from './email-verification-example.component';
import { EmailVerificationExampleModule } from './email-verification-example.module';

describe('EmailVerificationExampleComponent', () => {
  let component: EmailVerificationExampleComponent;
  let fixture: ComponentFixture<EmailVerificationExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        RouterModule.forRoot([]),
        TranslateModule.forRoot(),

        EmailVerificationExampleModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailVerificationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
