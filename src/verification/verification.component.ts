import {  Component, Input, Output, EventEmitter, ChangeDetectionStrategy  } from '@angular/core';
import { REGEX_STRING_CODE, REGEX_STRING_EMAIL } from '../core/defaults';

@Component({
	selector: 'pip-verification',
	templateUrl: 'verification.component.html',
	styleUrls: ['./verification.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipVerificationComponent {
    @Input() title: string = 'Verify email?';
    @Input() subtitle: string;

    @Input() changeServerUrlName: string = 'Change server';
    @Input() codeName: string = 'Verification code';
    @Input() code: string;
    @Input() codePattern: string = REGEX_STRING_CODE;
    @Input() codeRequired: string = 'Code is required';
    @Input() codeInvalid: string = 'Code is invalid';

    @Input() success: string = 'Code send successfuly';
    @Input() showSuccess: boolean = false;

    @Input() emailName: string = 'Email';
    @Input() email: string;
    @Input() emailPattern: string = REGEX_STRING_EMAIL;
    @Input() emailRequired: string = 'Email is required';
    @Input() emailInvalid: string = 'Email URL is invalid';

    @Input() error: any;
    @Input() loading: boolean;
    @Input() cancelName: string = 'Cancel';
    @Input() verificationName: string = 'Verification';
    @Input() abortName: string = 'Abort';

    @Input() resendText: string = "If you haven't received the code, press ";
    @Input() resendText1: string = 'resend';
    @Input() resendLinkText: string = ' to send it again.';
    
    @Input() showCancel: boolean = true;
    
    @Output() submit = new EventEmitter();
    @Output() abort = new EventEmitter();
    @Output() cancel = new EventEmitter();
    @Output() resend = new EventEmitter();

    public constructor() { 

    }

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
        if (!_email) return;

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