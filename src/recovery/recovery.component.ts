import {  Component, Input, Output, EventEmitter, ChangeDetectionStrategy  } from '@angular/core';

@Component({
	selector: 'pip-recovery',
	templateUrl: 'recovery.component.html',
	styleUrls: ['./recovery.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipRecoveryComponent {

    @Input() title: string = 'Forgot Password?';
    @Input() subtitle: string = "Enter the email address you used when you joined and we'll send you instructions to reset your password. <br> <br> For security reasons, we do NOT store your password. So rest assured that we will never send your password via email.'";

    @Input() changeServerUrlName: string = 'Change server';
    @Input() showUrl: boolean = true;
    @Input() serverUrlName: string = 'Server URL';
    @Input() serverUrl: string;
    @Input() serverUrlPattern: string = '^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})$';
    @Input() serverUrlRequired: string = 'Server URL is required';
    @Input() serverUrlInvalid: string = 'Server URL is invalid';

    @Input() emailName: string = 'Email';
    @Input() email: string;
    @Input() emailPattern: string = '^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$';
    @Input() emailRequired: string = 'Email is required';
    @Input() emailInvalid: string = 'Email URL is invalid';

    @Input() error: string;
    @Input() loading: boolean;
    @Input() cancelName: string = 'Cancel';
    @Input() recoveryName: string = 'Recovery';
    @Input() abortName: string = 'Abort';

    @Output() submit = new EventEmitter();
    @Output() abort = new EventEmitter();
    @Output() cancel = new EventEmitter();

    public constructor() { }

    public onSubmit(): void {
        this.submit.emit({
            serverUrl: this.serverUrl,
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