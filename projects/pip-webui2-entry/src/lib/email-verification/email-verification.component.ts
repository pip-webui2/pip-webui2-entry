import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { REGEX_STRING_CODE, REGEX_STRING_EMAIL } from '../core/defaults';

@Component({
    selector: 'pip-email-verification-dummy',
    templateUrl: 'email-verification.component.html',
    styleUrls: ['./email-verification.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipEmailVerificationDummyComponent {
    @Input() title = 'Verify email?';
    @Input() subtitle: string;

    @Input() changeServerUrlName = 'Change server';
    @Input() codeName = 'Verification code';
    @Input() code: string;
    @Input() codePattern: string = REGEX_STRING_CODE;
    @Input() codeRequired = 'Code is required';
    @Input() codeInvalid = 'Code is invalid';

    @Input() success = 'Code resend success.';
    @Input() showSuccess: boolean;

    @Input() emailName = 'Email';
    @Input() email: string;
    @Input() emailPattern: string = REGEX_STRING_EMAIL;
    @Input() emailRequired = 'Email is required';
    @Input() emailInvalid = 'Email URL is invalid';

    @Input() error: any;
    @Input() loading: boolean;
    @Input() cancelName = 'Cancel';
    @Input() verificationName = 'Verification';
    @Input() abortName = 'Abort';
    @Input() isTransparent = false;

    @Input() resendText = 'If you haven\'t received the code, press ';
    @Input() resendText1 = 'resend';
    @Input() resendLinkText = ' to send it again.';

    @Input() showCancel = true;

    @Output() submit = new EventEmitter();
    @Output() abort = new EventEmitter();
    @Output() cancel = new EventEmitter();
    @Output() resend = new EventEmitter();

    public constructor() { }

    public onSubmit(): void {
        this.submit.emit({
            code: this.code,
            email: this.email
        });
    }

    public onAbort(): void {
        this.abort.emit();
    }

    public onResend(_email): void {
        if (!_email) { return; }

        _email.control.markAsTouched();

        if (!this.email || !_email.valid) {

            return;
        }
        this.showSuccess = false;

        this.resend.emit({ email: this.email });
    }

    public onCancel(): void {
        this.cancel.emit();
    }

    public onChangeEmail(): void {
        this.error = null;
        this.showSuccess = false;
    }

    public onChangeCode(): void {
        this.error = null;
        this.showSuccess = false;
    }
}
