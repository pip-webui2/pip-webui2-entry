import { PhoneVerificationExampleModule } from './phone-verification-example.module';

describe('PhoneVerificationExampleModule', () => {
  let phoneVerificationExampleModule: PhoneVerificationExampleModule;

  beforeEach(() => {
    phoneVerificationExampleModule = new PhoneVerificationExampleModule();
  });

  it('should create an instance', () => {
    expect(phoneVerificationExampleModule).toBeTruthy();
  });
});
