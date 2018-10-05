import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { REGEX_STRING_SERVER_URL, REGEX_STRING_EMAIL, REGEX_STRING_PASSWORD } from '../core/defaults';

@Component({
    selector: 'pip-signin',
    templateUrl: 'signin.component.html',
    styleUrls: ['./signin.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipSigninComponent {

    public changeUrl = false;

    @Input() title = 'Sign in';
    @Input() subtitle: string;

    @Input() changeServerUrlName = 'Change server';
    @Input() showUrl = true;
    @Input() serverUrlName = 'Server URL';
    @Input() serverUrl: string;
    @Input() imageUrl: string;
    @Input() serverUrlPattern: string = REGEX_STRING_SERVER_URL;
    @Input() serverUrlRequired = 'Server URL is required';
    @Input() serverUrlInvalid = 'Server URL is invalid';

    @Input() emailName = 'Email';
    @Input() email: string;
    @Input() emailPattern: string = REGEX_STRING_EMAIL;
    @Input() emailRequired = 'Email is required';
    @Input() emailInvalid = 'Email URL is invalid';

    @Input() passwordName = 'Password';
    @Input() password: string;
    @Input() passwordPattern: string = REGEX_STRING_PASSWORD;
    @Input() passwordRequired = 'Password is required';
    @Input() passwordInvalid = 'Must be a list 6 symbols';

    @Input() forgotTitle = 'Forgot password? ';
    @Input() signupText = 'Not a member? ';
    @Input() signupLinkText = 'Sign up here';

    @Input() error: any;
    @Input() loading: boolean;
    @Input() signinName = 'Signin';
    @Input() abortName = 'Abort';
    @Input() isTransparent = false;

    @Output() submit = new EventEmitter();
    @Output() abort = new EventEmitter();
    @Output() forgot = new EventEmitter();
    @Output() signup = new EventEmitter();

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

    public onForgot(): void {
        this.forgot.emit();
    }

    public onSignup(): void {
        this.signup.emit();
    }
}
