import { Component, OnInit } from '@angular/core';
import { PipNavService } from 'pip-webui2-nav-temp';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-email-verification-example',
  templateUrl: './email-verification-example.component.html',
  styleUrls: ['./email-verification-example.component.scss']
})
export class EmailVerificationExampleComponent implements OnInit {

  public loading$: Observable<boolean>;
  public error$: BehaviorSubject<string>;
  public serverUrl$: Observable<string>;
  public email$: Observable<string>;
  public code$: Observable<string>;
  public showSuccess$: BehaviorSubject<boolean>;
  public subtitle = 'Confirm your email address using verification code';
  public resendText = 'If you haven\'t received the code, press ';
  public resendText1 = 'resend';
  public resendLinkText = ' to send it again.';
  public success = 'Code send success';

  constructor(
    private navService: PipNavService,
  ) {
    this.navService.showBreadcrumb({
      items: [{ title: 'Email verification' }]
    });
  }

  ngOnInit() {
    this.showSuccess$ = new BehaviorSubject(false);
    this.error$ = new BehaviorSubject('');
  }


  public onSubmit(data): void {
    console.log('submit', data);
  }

  public onAbort(): void {
    console.log('abort');
  }

  public onResend(data): void {
    if (!data && !data.email) {

      return;
    }
    console.log('resend');
    const a = Math.random();

    if (a > 0.5) {
      setTimeout(() => {
        this.showSuccess$.next(true);
      }, 1000);
    } else {
      setTimeout(() => {
        this.error$.next('Wrong email');
      }, 1000);
    }
  }

}
