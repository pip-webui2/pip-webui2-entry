import { Component, OnInit, AfterViewInit,  ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ObservableMedia, MediaChange } from "@angular/flex-layout";
import { Router } from "@angular/router";
import { PipThemesService, Theme } from 'pip-webui2-themes';
import { ExmapleListItem } from "./examples-list/shared/examples-list.model";
import { PipMediaService, PipSidenavService } from 'pip-webui2-layouts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public listIndex: number = 0;
  public themes: Theme[];
  public theme: Theme;
  public activeMediaQuery: boolean;
  public mode: string;
  public app: string = 'Entry';
  public url: string;

  public themesLocalNames: any = {
    "candy-theme": 'Candy',
    "unicorn-dark-theme": 'Unicorn Dark',
    "pip-blue-theme": 'Blue',
    "pip-grey-theme": 'Grey',
    "pip-pink-theme": 'Pink',
    "pip-green-theme": 'Green',
    "pip-navy-theme": 'Navy',
    "pip-amber-theme": 'Amber',
    "pip-orange-theme": 'Orange',
    "pip-dark-theme": 'Dark',
    "pip-black-theme": 'Black',
    "bootbarn-warm-theme": 'Bootbarn Warm',
    "bootbarn-cool-theme": 'Bootbarn Cool',
    "bootbarn-mono-theme": 'Bootbarn Mono'

  }
  
  public list: any[] = [
    {
      name: 'signin', id: 'signin', route: 'signin-example'
    }, {
      name: 'signup', id: 'signup', route: 'signup-example'
    }, {
      name: 'reset', id: 'reset', route: 'reset-example'
    }, {
      name: 'recovery', id: 'recovery', route: 'recovery-example'
    }, {
      name: 'verification', id: 'verification', route: 'verification-example'
    }
  ];

  public constructor(
    public sidenav: PipSidenavService,
    private service: PipThemesService,
    private router: Router,
    public media: PipMediaService,
    public globalMedia: ObservableMedia,) {

    media.activate();

    this.themes = this.service.themes;
    this.theme = this.service.selectedTheme;
  
    globalMedia.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change && change.mqAlias == 'xs'? true : false;
      this.mode = change && change.mqAlias == 'xs'? null : 'side';
    })

    router.events.subscribe((url:any) => {
    
      let index: number;
      console.log(url);
      if (!url.url) {
        this.listIndex = 0;
        return;
      }
      if (url.url != this.url) {
        this.url = url.url;
        index = this.list.findIndex((item) => {
            return "/" + item.route == this.url;
        });
        this.listIndex = index == -1 ? 0: index; 
      } 
    });

  }

  public onMenuClick() {
    this.sidenav.toggleNav();
  }

  public ngOnInit() {}

  public ngAfterViewInit() {}

  public onListItemIndexChanged(index: number) {
    
    this.listIndex = index;
  }
  
  public changeTheme() {
    this.service.selectedTheme = this.theme;

  }

}
