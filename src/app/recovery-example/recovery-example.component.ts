import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PipNavService } from 'pip-webui2-nav';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recovery-example',
  templateUrl: './recovery-example.component.html',
  styleUrls: ['./recovery-example.component.scss']
})
export class RecoveryExampleComponent implements OnInit {

  public error$: Observable<string>;
  public serverUrl$: Observable<string>;
  public email$: Observable<string>;
  public loading$: Observable<boolean>;

  constructor(
    private navService: PipNavService,
    private router: Router
  ) {
    this.navService.showBreadcrumb({
      items: [{ title: 'Password recovery' }]
    });
  }

  ngOnInit() {
  }

  public onSubmit(data): void {
    console.log('submit', data);

    this.router.navigateByUrl('reset-example');
  }

  public onAbort(): void {

    console.log('abort');
  }

}
