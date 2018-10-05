import { SignupExampleModule } from './signup-example.module';

describe('SignupExampleModule', () => {
  let signupExampleModule: SignupExampleModule;

  beforeEach(() => {
    signupExampleModule = new SignupExampleModule();
  });

  it('should create an instance', () => {
    expect(signupExampleModule).toBeTruthy();
  });
});
