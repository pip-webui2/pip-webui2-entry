import { Component, OnInit } from '@angular/core';
import { PipNavService } from 'pip-webui2-nav-temp';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-phone-verification-example',
  templateUrl: './phone-verification-example.component.html',
  styleUrls: ['./phone-verification-example.component.scss']
})
export class PhoneVerificationExampleComponent implements OnInit {

  public loading$: Observable<boolean>;
  public error$: Observable<string>;
  public serverUrl$: Observable<string>;
  public phone$: Observable<string>;
  public code$: Observable<string>;
  public showSuccess$: BehaviorSubject<boolean>;
  public subtitle = 'Confirm your phone using verification code';
  public resendText = 'If you haven\'t received the code, press ';
  public resendText1 = 'resend';
  public resendLinkText = ' to send it again.';
  public success = 'Code send success';

  constructor(
    private navService: PipNavService,
  ) {
    this.navService.showBreadcrumb({
      items: [{ title: 'Phone verification' }]
    });
  }

  ngOnInit() {
    this.showSuccess$ = new BehaviorSubject(false);
  }

  public onSubmit(data): void {
    console.log('submit', data);
  }

  public onAbort(): void {
    console.log('abort');
  }

  public onResend(data): void {
    if (!data && !data.ph) {

      return;
    }
    console.log('resend');
    setTimeout(() => {
      this.showSuccess$.next(true);
    }, 1000);
  }

}
