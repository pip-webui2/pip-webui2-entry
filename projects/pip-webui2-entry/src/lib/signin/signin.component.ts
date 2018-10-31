import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { REGEX_STRING_SERVER_URL, REGEX_STRING_EMAIL, REGEX_STRING_PASSWORD } from '../core/defaults';

@Component({
    selector: 'pip-signin',
    templateUrl: 'signin.component.html',
    styleUrls: ['./signin.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipSigninComponent {

    public changeUrl = false;
    public isLoading = false;
    public form: FormGroup;

    @Input() title = 'Sign in';
    @Input() subtitle: string;

    @Input() changeServerUrlName = 'Change server';
    @Input() showUrl = true;
    @Input() serverUrlName = 'Server URL';
    @Input() set serverUrl(url: string) {
        this.form.get('url').setValue(url);
    }
    @Input() imageUrl: string;
    @Input() set serverUrlPattern(pattern: string) {
        if (pattern) {
            this.form.get('url').setValidators([
                Validators.required,
                Validators.pattern(pattern)
            ]);
            this.form.get('url').updateValueAndValidity();
        }
    }
    @Input() serverUrlRequired = 'Server URL is required';
    @Input() serverUrlInvalid = 'Server URL is invalid';

    @Input() emailName = 'Email';
    @Input() set email(email: string) {
        this.form.get('email').setValue(email);
    }
    @Input() set emailPattern(pattern: string) {
        if (pattern) {
            this.form.get('email').setValidators([
                Validators.required,
                Validators.pattern(pattern)
            ]);
            this.form.get('email').updateValueAndValidity();
        }
    }
    @Input() emailRequired = 'Email is required';
    @Input() emailInvalid = 'Email URL is invalid';

    @Input() passwordName = 'Password';
    @Input() set password(pwd: string) {
        this.form.get('password').setValue(pwd);
    }
    @Input() set passwordPattern(pattern: string) {
        if (pattern) {
            this.form.get('password').setValidators([
                Validators.required,
                Validators.pattern(pattern)
            ]);
            this.form.get('password').updateValueAndValidity();
        }
    }
    @Input() passwordRequired = 'Password is required';
    @Input() passwordInvalid = 'Password doesn\'t match the pattern. 6 letters and numbers in mixed case.' ;

    @Input() forgotTitle = 'Forgot password? ';
    @Input() signupText = 'Not a member? ';
    @Input() signupLinkText = 'Sign up here';

    @Input() error: any;
    @Input() set loading(val: boolean) {
        this.isLoading = val;
        val ? this.form.disable() : this.form.enable();
    }
    @Input() signinName = 'SIGNIN';
    @Input() abortName = 'ABORT';
    @Input() isTransparent = false;

    @Output() submit = new EventEmitter();
    @Output() abort = new EventEmitter();
    @Output() forgot = new EventEmitter();
    @Output() signup = new EventEmitter();

    public constructor(
        private fb: FormBuilder
    ) {
        this.form = this.fb.group({
            url: [''],
            email: ['', [Validators.required, Validators.pattern(REGEX_STRING_EMAIL)]],
            password: ['', [Validators.required, Validators.pattern(REGEX_STRING_PASSWORD)]]
        });
    }

    public onSubmit(): void {
        this.form.updateValueAndValidity();
        if (this.form.invalid) { return; }
        this.submit.emit({
            serverUrl: this.form.get('url').value,
            email: this.form.get('email').value,
            password: this.form.get('password').value
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

    public toogleChangeUrl() {
        this.changeUrl = true;
        this.form.get('url').setValidators([
            Validators.required,
            Validators.pattern(REGEX_STRING_SERVER_URL)
        ]);
    }

    public hasError(field: string, error: string) {
        return this.form.get(field).getError(error) && this.form.get(field).touched;
    }
}
