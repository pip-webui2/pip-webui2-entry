import { EmailVerificationExampleModule } from './email-verification-example.module';

describe('EmailVerificationExampleModule', () => {
  let emailVerificationExampleModule: EmailVerificationExampleModule;

  beforeEach(() => {
    emailVerificationExampleModule = new EmailVerificationExampleModule();
  });

  it('should create an instance', () => {
    expect(emailVerificationExampleModule).toBeTruthy();
  });
});
