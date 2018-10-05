import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneVerificationExampleComponent } from './phone-verification-example.component';

describe('PhoneVerificationExampleComponent', () => {
  let component: PhoneVerificationExampleComponent;
  let fixture: ComponentFixture<PhoneVerificationExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneVerificationExampleComponent ]
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
