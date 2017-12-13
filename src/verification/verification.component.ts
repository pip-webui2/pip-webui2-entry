import {  Component, Input, Output, EventEmitter, ChangeDetectionStrategy  } from '@angular/core';

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
    @Input() codePattern: string = '([\da-z\.-]+)\.([a-z\.]{2,6})$';
    @Input() codeRequired: string = 'Code is required';
    @Input() codeInvalid: string = 'Code is invalid';

    @Input() emailName: string = 'Email';
    @Input() email: string;
    @Input() emailPattern: string = '^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$';
    @Input() emailRequired: string = 'Email is required';
    @Input() emailInvalid: string = 'Email URL is invalid';

    @Input() error: string;
    @Input() loading: boolean;
    @Input() cancelName: string = 'Cancel';
    @Input() verificationName: string = 'Verification';
    @Input() abortName: string = 'Abort';
    @Input() resend: string;
    
    @Output() submit = new EventEmitter();
    @Output() abort = new EventEmitter();
    @Output() cancel = new EventEmitter();

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

    public onCancel(): void {
        this.cancel.emit();
    }
}