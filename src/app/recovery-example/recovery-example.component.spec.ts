import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryExampleComponent } from './recovery-example.component';

describe('RecoveryExampleComponent', () => {
  let component: RecoveryExampleComponent;
  let fixture: ComponentFixture<RecoveryExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveryExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
