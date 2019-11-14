import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { each } from 'lodash';
import { PipMediaService, PipSidenavService, PipRightnavService } from 'pip-webui2-layouts';
import { PipNavService } from 'pip-webui2-nav';
import { PipThemesService, Theme } from 'pip-webui2-themes';

import { AppTranslations } from './app.strings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public languages: string[];
  public language = 'en';
  public themes: Theme[];
  public theme: Theme;
  public themesLocalNames: any = {
    'candy-theme': 'Candy',
    'unicorn-dark-theme': 'Unicorn Dark',
    'pip-blue-theme': 'Blue',
    'pip-grey-theme': 'Grey',
    'pip-pink-theme': 'Pink',
    'pip-green-theme': 'Green',
    'pip-navy-theme': 'Navy',
    'pip-amber-theme': 'Amber',
    'pip-orange-theme': 'Orange',
    'pip-dark-theme': 'Dark',
    'pip-black-theme': 'Black',
    'bootbarn-warm-theme': 'Bootbarn Warm',
    'bootbarn-cool-theme': 'Bootbarn Cool',
    'bootbarn-mono-theme': 'Bootbarn Mono',
    'mst-black-theme': 'MST Black',
    'mst-black-dark-theme': 'MST Black Dark',
    'mst-mono-theme': 'MST Mono',
    'mst-orange-theme': 'MST Orange',
    'mst-orange-dark-theme': 'MST Orange Dark',
    'mst-elegant-theme': 'MST Elegant'
  };
  public messages: any[] = [
    { image_src: '/assets/girl.png', subject: 'University', from: 'Marta', content: 'Tommorow you should visit university' },
    { image_src: '/assets/boy2.png', subject: 'Party', from: 'Sam', content: 'We are going to have a party' },
    { image_src: '/assets/girl2.png', subject: 'Cats', from: 'April', content: 'look at these kittens!!!' },
    { image_src: '/assets/boy.png', subject: 'Football', from: 'Nick', content: 'Cup is ours' }
  ];

  public constructor(
    public media: PipMediaService,
    private themesService: PipThemesService,
    private matIconRegistry: MatIconRegistry,
    private navService: PipNavService,
    private rightnav: PipRightnavService,
    private sidenav: PipSidenavService,
    private translate: TranslateService,
  ) {
    this.media.activate();
    this.themesService.selectedTheme = this.themesService.themes[0];
    this.matIconRegistry.registerFontClassAlias('ice', 'ice');

    this.translate.use('en');
    this.translate.setTranslation('en', AppTranslations.en, true);
    this.translate.setTranslation('ru', AppTranslations.ru, true);

    this.navService.showNavIcon({
      icon: 'menu',
      action: () => {
        this.sidenav.toggleNav();
      }
    });

    this.navService.showPrimaryActions({
      actions: [
        {
          icon: 'notifications',
          name: 'notifications',
          click: () => {
            this.rightnav.toggleRightnav();
          }
        },
        {
          icon: 'translate', name: 'translate', subActions: this.generatePrimaryActionLanguageList()
        },
        {
          icon: 'format_color_fill', name: 'format_color_fill', subActions: this.generatePrimaryActionThemeList()
        }
      ]
    });
    this.navService.showNavMenu({
      sections: [
        {
          name: 'appbar',
          links: [
            {
              name: 'signin',
              title: 'Signin',
              state: 'signin',
              url: 'signin-example'
            },
            {
              name: 'signup',
              title: 'Signup',
              state: 'signup',
              url: 'signup-example'
            },
            {
              name: 'reset',
              title: 'Reset password',
              state: 'reset',
              url: 'reset-example'
            },
            {
              name: 'recovery',
              title: 'Recovery password',
              state: 'recovery',
              url: 'recovery-example'
            },
            {
              name: 'email-verification',
              title: 'Email verification',
              state: 'email-verification',
              url: 'email-verification-example'
            },
            {
              name: 'phone-verification',
              title: 'Phone verification',
              state: 'phone-verification',
              url: 'phone-verification-example'
            },
          ]
        }
      ]
    });
  }

  ngOnInit() {
    this.selectTheme(this.themesService.selectedTheme);
  }

  private selectTheme(selectedTheme) {
    this.themesService.selectedTheme = selectedTheme;
    this.theme = selectedTheme;
  }

  private generatePrimaryActionLanguageList() {
    const list = [];

    each(this.translate.langs, (language) => {
      this.translate.get(language).subscribe((t: string) => {
        list.push({
          title: t,
          click: () => {
            this.translate.use(language);
          }
        });
      });
    });

    return list;
  }

  private generatePrimaryActionThemeList() {
    const list = [];

    each(this.themesService.themes, (theme) => {
      list.push({
        title: this.themesLocalNames[theme.name], click: () => {
          this.selectTheme(theme);
        }
      });
    });

    return list;
  }
}
