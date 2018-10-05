import { SigninExampleModule } from './signin-example.module';

describe('SigninExampleModule', () => {
  let signinExampleModule: SigninExampleModule;

  beforeEach(() => {
    signinExampleModule = new SigninExampleModule();
  });

  it('should create an instance', () => {
    expect(signinExampleModule).toBeTruthy();
  });
});
