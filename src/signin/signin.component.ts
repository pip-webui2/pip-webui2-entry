import {  Component, Input, Output, EventEmitter, ChangeDetectionStrategy  } from '@angular/core';

@Component({
	selector: 'pip-signin',
	templateUrl: 'signin.component.html',
	styleUrls: ['./signin.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipSigninComponent {

    @Input() title: string = 'Sign in';

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

    @Input() passwordName: string = 'Password';
    @Input() password: string;
    @Input() passwordRequired: string = 'Password is required';
    @Input() passwordInvalid: string = 'Must be a list 6 symbols';

    @Input() forgotTitle: string = 'Forgot password?';
    @Input() forgotLink: string = '';

    @Input() error: string;
    @Input() loading: boolean;
    @Input() signinName: string = 'Signin';
    @Input() abortName: string = 'Abort';

    @Output() submit = new EventEmitter();
    @Output() abort = new EventEmitter();

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
}