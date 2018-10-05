import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailVerificationExampleComponent } from './email-verification-example.component';

describe('EmailVerificationExampleComponent', () => {
  let component: EmailVerificationExampleComponent;
  let fixture: ComponentFixture<EmailVerificationExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailVerificationExampleComponent ]
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
