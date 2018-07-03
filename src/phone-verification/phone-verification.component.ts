import {  Component, Input, Output, EventEmitter, ChangeDetectionStrategy  } from '@angular/core';
import { REGEX_STRING_CODE, REGEX_STRING_PHONE } from '../core/defaults';

@Component({
	selector: 'pip-phone-verification',
	templateUrl: 'phone-verification.component.html',
	styleUrls: ['./phone-verification.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipPhoneVerificationComponent {
    @Input() title: string = 'Verify phone?';
    @Input() subtitle: string;

    @Input() changeServerUrlName: string = 'Change server';
    @Input() codeName: string = 'Verification code';
    @Input() code: string;
    @Input() codePattern: string = REGEX_STRING_CODE;
    @Input() codeRequired: string = 'Code is required';
    @Input() codeInvalid: string = 'Code is invalid';

    @Input() success: string = 'Code send successfuly';
    @Input() showSuccess: boolean = false;
    
    @Input() phoneName: string = 'Phone';
    @Input() phone: string;
    @Input() phonePattern: string = REGEX_STRING_PHONE;
    @Input() phoneRequired: string = 'Phone is required';
    @Input() phoneInvalid: string = 'Enter a valid phone in e.164 format: +xxxxxxxxxxx';

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