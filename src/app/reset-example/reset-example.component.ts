import { Component, OnInit } from '@angular/core';
import { PipNavService } from 'pip-webui2-nav-temp';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reset-example',
  templateUrl: './reset-example.component.html',
  styleUrls: ['./reset-example.component.scss']
})
export class ResetExampleComponent implements OnInit {

  public error$: Observable<string>;
  public serverUrl$: Observable<string>;
  public email$: Observable<string>;
  public password$: Observable<string>;
  public loading$: Observable<boolean>;

  constructor(
    private navService: PipNavService
  ) {
    this.navService.showBreadcrumb({
      items: [{ title: 'Reset password' }]
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

}
