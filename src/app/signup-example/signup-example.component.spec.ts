import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupExampleComponent } from './signup-example.component';

describe('SignupExampleComponent', () => {
  let component: SignupExampleComponent;
  let fixture: ComponentFixture<SignupExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
