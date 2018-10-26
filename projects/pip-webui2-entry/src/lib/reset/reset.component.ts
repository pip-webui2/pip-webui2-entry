import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { REGEX_STRING_SERVER_URL, REGEX_STRING_EMAIL, REGEX_STRING_PASSWORD } from '../core/defaults';

@Component({
    selector: 'pip-reset',
    templateUrl: 'reset.component.html',
    styleUrls: ['./reset.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipResetComponent {

    public changeUrl = false;

    @Input() title = 'Reset';
    // tslint:disable-next-line:max-line-length
    @Input() subtitle = 'Enter the email address together with the reset code you received in email from PipLife. Remember the code is only active for 24 hours.';

    @Input() changeServerUrlName = 'Change server';
    @Input() showUrl = true;
    @Input() serverUrlName = 'Server URL';
    @Input() serverUrl: string;
    @Input() serverUrlPattern: string = REGEX_STRING_SERVER_URL;
    @Input() serverUrlRequired = 'Server URL is required';
    @Input() serverUrlInvalid = 'Server URL is invalid';

    @Input() emailName = 'Email';
    @Input() email: string;
    @Input() emailPattern: string = REGEX_STRING_EMAIL;
    @Input() emailRequired = 'Email is required';
    @Input() emailInvalid = 'Email URL is invalid';

    @Input() codeName = 'Reset code';
    @Input() code: string;
    @Input() codeRequired = 'Code is required';

    @Input() passwordName = 'Password';
    @Input() password: string;
    @Input() passwordPattern: string = REGEX_STRING_PASSWORD;
    @Input() passwordRequired = 'Password is required';
    @Input() passwordInvalid = 'Must be a list 3 symbols';

    @Input() error: any;
    @Input() loading: boolean;
    @Input() cancelName = 'CANCEL';
    @Input() resetName = 'RESET';
    @Input() abortName = 'ABORT';
    @Input() isTransparent = false;

    @Output() submit = new EventEmitter();
    @Output() abort = new EventEmitter();
    @Output() cancel = new EventEmitter();

    public constructor() { }

    public onSubmit(): void {
        this.submit.emit({
            serverUrl: this.serverUrl,
            email: this.email,
            password: this.password,
            code: this.code
        });
    }

    public onAbort(): void {
        this.abort.emit();
    }

    public onCancel(): void {
        this.cancel.emit();
    }
}
