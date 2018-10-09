import { Component, OnInit } from '@angular/core';
import { PipNavService } from 'pip-webui2-nav';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-example',
  templateUrl: './signin-example.component.html',
  styleUrls: ['./signin-example.component.scss']
})
export class SigninExampleComponent implements OnInit {

  public error$: Observable<string>;
  public serverUrl$: Observable<string>;
  public email$: Observable<string>;
  public password$: Observable<string>;
  public loading$: Observable<boolean>;

  public forgotTitle = 'Forgot password?';
  public signupText = 'Not a member?';
  public signupLinkText = 'Sign up here';

  constructor(
    private navService: PipNavService,
    private router: Router
  ) {
    this.navService.showBreadcrumb({
      items: [{ title: 'Signin' }]
    });
  }

  ngOnInit() {
  }

  public onSubmit(data): void {
    console.log('submit', data);
  }

  public onAbort(): void {
    console.log('abort');
  }

  public onForgot(data: any): void {
    this.router.navigate(['/recovery-example']);
  }

  public onSignup(): void {
    this.router.navigate(['/signup-example']);
  }

}
