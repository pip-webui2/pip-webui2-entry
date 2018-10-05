import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninExampleComponent } from './signin-example.component';

describe('SigninExampleComponent', () => {
  let component: SigninExampleComponent;
  let fixture: ComponentFixture<SigninExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
