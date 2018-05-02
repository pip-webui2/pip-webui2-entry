import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { REGEX_STRING_SERVER_URL, REGEX_STRING_EMAIL } from '../core/defaults';

@Component({
    selector: 'pip-signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['./signup.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipSignupComponent {


    @Input() title: string = 'Sign up';

    @Input() changeServerUrlName: string = 'Change server';
    @Input() showUrl: boolean = true;
    @Input() serverUrlName: string = 'Server URL';
    @Input() serverUrl: string;
    @Input() serverUrlPattern: string = REGEX_STRING_SERVER_URL;
    @Input() serverUrlRequired: string = 'Server URL is required';
    @Input() serverUrlInvalid: string = 'Server URL is invalid';

    @Input() emailName: string = 'Email';
    @Input() email: string;
    @Input() emailPattern: string = REGEX_STRING_EMAIL;
    @Input() emailRequired: string = 'Email is required';
    @Input() emailInvalid: string = 'Email URL is invalid';

    @Input() showName: boolean = true;
    @Input() nameName: string = 'Full name';
    @Input() name: string;
    @Input() nameRequired: string = 'Name is required';

    @Input() passwordName: string = 'Password';
    @Input() password: string;
    @Input() passwordRequired: string = 'Password is required';
    @Input() passwordInvalid: string = 'Must be a list 6 symbols';

    @Input() privacyLink: string;

    @Input() signinText: string = "Do you have an account? ";
    @Input() signinLinkText: string = "Sign in here";

    @Input() error: string;
    @Input() loading: boolean;
    @Input() signupName: string = 'Signup';
    @Input() abortName: string = 'Abort';

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