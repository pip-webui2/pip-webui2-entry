import {  Component, Input, Output, EventEmitter, ChangeDetectionStrategy  } from '@angular/core';
import { REGEX_STRING_CODE, REGEX_STRING_PHONE } from '../core/defaults';

@Component({
	selector: 'pip-phone-verification-dummy',
	templateUrl: 'phone-verification.component.html',
	styleUrls: ['./phone-verification.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipPhoneVerificationDummyComponent {
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

    @Input() phoneName: string;
    @Input() phone: string;
    @Input() phonePattern: string;
    @Input() phoneRequired: string;
    @Input() phoneInvalid: string;

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
        this.title = this.title === undefined ? 'Verify phone?' : null;
        this.changeServerUrlName = this.changeServerUrlName === undefined ? 'Change server' : null;
        this.codeName = this.codeName === undefined ? 'Verification code' : null;
        this.codePattern = this.codePattern === undefined ? REGEX_STRING_CODE : null;
        this.codeRequired = this.codeRequired === undefined ? 'Code is required' : null;
        this.codeInvalid = this.codeInvalid === undefined ? 'Code is invalid' : null;
        this.phoneName = this.phoneName === undefined ? 'Phone' : null;
        this.phonePattern = this.phonePattern === undefined ? REGEX_STRING_PHONE : null;
        this.phoneRequired = this.phoneRequired === undefined ? 'Phone is required' : null;
        this.phoneInvalid = this.phoneInvalid === undefined ? 'Enter a valid phone in e.164 format: +xxxxxxxxxxx' : null;
        this.cancelName = this.cancelName === undefined ? 'Cancel' : null;
        this.verificationName = this.verificationName === undefined ? 'Verification' : null;
        this.abortName = this.abortName === undefined ? 'Abort' : null;
        this.resendText = this.resendText === undefined ? "If you haven't received the code, press " : null;
        this.resendText1 = this.resendText1 === undefined ? 'resend' : null;
        this.resendLinkText = this.resendLinkText === undefined ? ' to send it again.' : null;
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
        if (!_phone) return;

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