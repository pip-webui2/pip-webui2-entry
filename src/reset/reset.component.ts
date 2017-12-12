import {  Component, Input, Output, EventEmitter, ChangeDetectionStrategy  } from '@angular/core';

@Component({
	selector: 'pip-reset',
	templateUrl: 'reset.component.html',
	styleUrls: ['./reset.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipResetComponent {

    @Input() title: string = 'Reset';
    @Input() subtitle: string = 'Enter the email address together with the reset code you received in email from PipLife. Remember the code is only active for 24 hours.';

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

    @Input() codeName: string = 'Reset code';
    @Input() code: string;
    @Input() codeRequired: string = 'Code is required';

    @Input() passwordName: string = 'Password';
    @Input() password: string;
    @Input() passwordRequired: string = 'Password is required';
    @Input() passwordInvalid: string = 'Must be a list 6 symbols';

    @Input() error: string;
    @Input() loading: boolean;
    @Input() cancelName: string = 'Cancel';
    @Input() resetName: string = 'Reset';
    @Input() abortName: string = 'Abort';

    @Output() submit = new EventEmitter();
    @Output() abort = new EventEmitter();
    @Output() cancel = new EventEmitter();

    public constructor() { }

    public onSubmit(): void {
        this.submit.emit({
            serverUrl: this.serverUrl,
            email: this.email,
            password: this.password
        });
    }

    public onAbort(): void {
        this.abort.emit();
    }

    public onCancel(): void {
        this.cancel.emit();
    }
}