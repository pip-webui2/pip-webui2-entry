import { ResetExampleModule } from './reset-example.module';

describe('ResetExampleModule', () => {
  let resetExampleModule: ResetExampleModule;

  beforeEach(() => {
    resetExampleModule = new ResetExampleModule();
  });

  it('should create an instance', () => {
    expect(resetExampleModule).toBeTruthy();
  });
});
