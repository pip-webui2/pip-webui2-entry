import { RecoveryExampleModule } from './recovery-example.module';

describe('RecoveryExampleModule', () => {
  let recoveryExampleModule: RecoveryExampleModule;

  beforeEach(() => {
    recoveryExampleModule = new RecoveryExampleModule();
  });

  it('should create an instance', () => {
    expect(recoveryExampleModule).toBeTruthy();
  });
});
