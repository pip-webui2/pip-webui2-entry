import {  Component, Input, Output, EventEmitter, ChangeDetectionStrategy  } from '@angular/core';
import { REGEX_STRING_CODE, REGEX_STRING_EMAIL } from '../core/defaults';

@Component({
	selector: 'pip-email-verification-dummy',
	templateUrl: 'email-verification.component.html',
	styleUrls: ['./email-verification.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipEmailVerificationDummyComponent {
    @Input() title: string;
    @Input() subtitle: string;

    @Input() changeServerUrlName: string;
    @Input() codeName: string;
    @Input() code: string;
    @Input() codePattern: string;
    @Input() codeRequired: string;
    @Input() codeInvalid: string;

    @Input() success: string;
    @Input() showSuccess: boolean;

    @Input() emailName: string;
    @Input() email: string;
    @Input() emailPattern: string;
    @Input() emailRequired: string;
    @Input() emailInvalid: string;

    @Input() error: any;
    @Input() loading: boolean;
    @Input() cancelName: string;
    @Input() verificationName: string;
    @Input() abortName: string;

    @Input() resendText: string;
    @Input() resendText1: string;
    @Input() resendLinkText: string;

    @Input() showCancel: boolean = true;

    @Output() submit = new EventEmitter();
    @Output() abort = new EventEmitter();
    @Output() cancel = new EventEmitter();
    @Output() resend = new EventEmitter();

    public constructor() {

    }

    public ngOnInit() {
        this.title = this.title === undefined ? 'Verify email?' : this.title;
        this.changeServerUrlName = this.changeServerUrlName === undefined ? 'Change server' : this.changeServerUrlName;
        this.codeName = this.codeName === undefined ? 'Verification code' : this.codeName;
        this.codePattern = this.codePattern === undefined ? REGEX_STRING_CODE : this.codePattern;
        this.codeRequired = this.codeRequired === undefined ? 'Code is required' : this.codeRequired;
        this.codeInvalid = this.codeInvalid === undefined ? 'Code is invalid' : this.codeInvalid;
        this.emailName = this.emailName === undefined ? 'Email' : this.emailName;
        this.emailPattern = this.emailPattern === undefined ? REGEX_STRING_EMAIL : this.emailPattern;
        this.emailRequired = this.emailRequired === undefined ? 'Email is required' : this.emailRequired;
        this.emailInvalid = this.emailInvalid === undefined ? 'Email URL is invalid' : this.emailInvalid;
        this.cancelName = this.cancelName === undefined ? 'Cancel' : this.cancelName;
        this.verificationName = this.verificationName === undefined ? 'Verification' : this.verificationName;
        this.abortName = this.abortName === undefined ? 'Abort' : this.abortName;
        this.resendText = this.resendText === undefined ? "If you haven't received the code, press " : this.resendText;
        this.resendText1 = this.resendText1 === undefined ? 'resend' : this.resendText1;
        this.resendLinkText = this.resendLinkText === undefined ? ' to send it again.' : this.resendLinkText;
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