import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { REGEX_STRING_SERVER_URL, REGEX_STRING_EMAIL, REGEX_STRING_PASSWORD } from '../core/defaults';

@Component({
    selector: 'pip-signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['./signup.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipSignupComponent {

    public changeUrl = false;

    @Input() title = 'Sign up';
    @Input() subtitle: string;

    @Input() changeServerUrlName = 'Change server';
    @Input() showUrl = true;
    @Input() serverUrlName = 'Server URL';
    @Input() serverUrl: string;
    @Input() serverUrlPattern: string = REGEX_STRING_SERVER_URL;
    @Input() serverUrlRequired = 'Server URL is required';
    @Input() serverUrlInvalid = 'Server URL is invalid';
    @Input() imageUrl: string;

    @Input() emailName = 'Email';
    @Input() email: string;
    @Input() emailPattern: string = REGEX_STRING_EMAIL;
    @Input() emailRequired = 'Email is required';
    @Input() emailInvalid = 'Email URL is invalid';

    @Input() showName = true;
    @Input() nameName = 'Full name';
    @Input() name: string;
    @Input() nameRequired = 'Name is required';

    @Input() passwordName = 'Password';
    @Input() password: string;
    @Input() passwordPattern: string = REGEX_STRING_PASSWORD;
    @Input() passwordRequired = 'Password is required';
    @Input() passwordInvalid = 'Must be a list 3 symbols';

    @Input() privacyLink: string;

    @Input() signinText = 'Do you have an account? ';
    @Input() signinLinkText = 'Sign in here';

    @Input() error: any;
    @Input() loading: boolean;
    @Input() signupName = 'SIGNUP';
    @Input() abortName = 'ABORT';
    @Input() isTransparent = false;

    @Output() submit = new EventEmitter();
    @Output() abort = new EventEmitter();
    @Output() signin = new EventEmitter();

    public constructor() { }

    public onSubmit(): void {
        this.submit.emit({
            serverUrl: this.serverUrl,
            email: this.email,
            password: this.password,
            name: this.name
        });
    }

    public onAbort(): void {
        this.abort.emit();
    }

    public onSignin(): void {
        this.signin.emit();
    }
}
