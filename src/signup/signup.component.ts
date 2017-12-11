import {  Component, Input, Output, EventEmitter, ChangeDetectionStrategy  } from '@angular/core';

@Component({
	selector: 'pip-signup',
	templateUrl: 'signup.component.html',
	styleUrls: ['./signup.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipSignupComponent {

	@Input() serverUrl: string;
    @Input() email: string;
    @Input() password: string;
    @Input() error: string;
    @Input() loading: boolean;

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