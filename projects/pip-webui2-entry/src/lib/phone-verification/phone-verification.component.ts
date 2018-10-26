import {  Component, Input, Output, EventEmitter, ChangeDetectionStrategy  } from '@angular/core';
import { REGEX_STRING_CODE, REGEX_STRING_PHONE } from '../core/defaults';

@Component({
    selector: 'pip-phone-verification-dummy',
    templateUrl: 'phone-verification.component.html',
    styleUrls: ['./phone-verification.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipPhoneVerificationDummyComponent {
    @Input() title = 'Verify phone?';
    @Input() subtitle: string;

    @Input() changeServerUrlName = 'Change server';
    @Input() codeName = 'Verification code';
    @Input() code: string;
    @Input() codePattern: string = REGEX_STRING_CODE;
    @Input() codeRequired = 'Code is required';
    @Input() codeInvalid = 'Code is invalid';

    @Input() success = 'Code resend success.';
    @Input() showSuccess: boolean;

    @Input() phoneName = 'Phone';
    @Input() phone: string;
    @Input() phonePattern: string = REGEX_STRING_PHONE;
    @Input() phoneRequired = 'Phone is required';
    @Input() phoneInvalid = 'Enter a valid phone in e.164 format: +xxxxxxxxxxx';

    @Input() error: any;
    @Input() loading: boolean;
    @Input() cancelName = 'CANCEL';
    @Input() verificationName = 'VERIFICATION';
    @Input() abortName = 'ABORT';
    @Input() isTransparent = false;

    @Input() resendText = 'If you haven\'t received the code, press ';
    @Input() resendText1 = 'resend';
    @Input() resendLinkText = ' to send it again.';

    @Input() showCancel = true;

    @Output() submit = new EventEmitter();
    @Output() abort = new EventEmitter();
    @Output() cancel = new EventEmitter();
    @Output() resend = new EventEmitter();

    public constructor() {

    }

    public onSubmit(): void {
        this.submit.emit({
            code: this.code,
            phone: this.phone
        });
    }

    public onAbort(): void {
        this.abort.emit();
    }

    public onResend(_phone): void {
        if (!_phone) { return; }

        _phone.control.markAsTouched();

        if (!this.phone || !_phone.valid) {

            return;
        }
        this.showSuccess = false;

        this.resend.emit({ phone: this.phone });
    }

    public onCancel(): void {
        this.cancel.emit();
    }

    public onChangePhone(): void {
       this.error = null;
       this.showSuccess = false;
    }

    public onChangeCode(): void {
       this.error = null;
       this.showSuccess = false;
    }
}
