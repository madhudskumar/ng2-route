import { browser, element, by } from 'protractor';

export class Ng2RoutePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('route-root h1')).getText();
  }
}
