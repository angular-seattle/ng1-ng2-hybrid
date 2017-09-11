import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderText() {
    return element(by.css('angular-seed-header > md-toolbar > .md-toolbar-tools')).getText();
  }
}
