import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PipNavService } from 'pip-webui2-nav-temp';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup-example',
  templateUrl: './signup-example.component.html',
  styleUrls: ['./signup-example.component.scss']
})
export class SignupExampleComponent implements OnInit {

  public error$: Observable<string>;
  public serverUrl$: Observable<string>;
  public email$: Observable<string>;
  public password$: Observable<string>;
  public loading$: Observable<boolean>;
  // tslint:disable-next-line:max-line-length
  public privacyLink = 'By clicking Sign up, you agree to the <a href=\'/#/privacy-example\' class=\'pip-link\'> privacy statement </a> and <a href=\'/#/service-example class=\'pip-link\'> services agreement </a>';
  public signinText = 'Do you have an account? ';
  public signinLinkText = 'Sign in here';

  public constructor(
    private navService: PipNavService,
    private router: Router
  ) {
    this.navService.showBreadcrumb({
      items: [{ title: 'Signup' }]
    });
  }

  ngOnInit() { }

  public onSubmit(data: any): void {
    console.log('submit', data);
  }

  public onAbort(data: any): void {
    console.log('abort');
  }

  public onSignin(data: any): void {
    this.router.navigate(['/signin-example']);
  }

}
