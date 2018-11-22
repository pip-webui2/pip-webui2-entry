import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';

import { RecoveryExampleComponent } from './recovery-example.component';
import { RecoveryExampleModule } from './recovery-example.module';

describe('RecoveryExampleComponent', () => {
  let component: RecoveryExampleComponent;
  let fixture: ComponentFixture<RecoveryExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        RouterModule.forRoot([]),
        TranslateModule.forRoot(),

        RecoveryExampleModule
      ]
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
