export class ProfilePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('profile-app h1')).getText();
  }
}
