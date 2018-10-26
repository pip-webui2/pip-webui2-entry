import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { REGEX_STRING_SERVER_URL, REGEX_STRING_EMAIL } from '../core/defaults';

@Component({
    selector: 'pip-recovery',
    templateUrl: 'recovery.component.html',
    styleUrls: ['./recovery.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipRecoveryComponent {

    public changeUrl = false;

    @Input() title = 'Forgot Password?';
    // tslint:disable-next-line:max-line-length
    @Input() subtitle = 'Enter the email address you used when you joined and we\'ll send you instructions to reset your password. <br> <br> For security reasons, we do NOT store your password. So rest assured that we will never send your password via email.\'';

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

    @Input() any;
    @Input() error: any;
    @Input() loading: boolean;
    @Input() cancelName = 'CANCEL';
    @Input() recoveryName = 'RECOVERY';
    @Input() abortName = 'ABORT';
    @Input() isTransparent = false;

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
