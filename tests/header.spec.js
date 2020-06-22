const assert = require('assert');
const HeaderPage = require('../pages/header.page');
const LoginPage = require('../pages/login.page');

describe('Test Suite', () => {
  it('should redirect to new site', () => {
    browser.url('');
    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    HeaderPage.linkLink.click();
    assert.equal(browser.getUrl(), 'https://glitchitsystem.com/', 'wrong website');
    browser.pause(2000);
  });

  it('should open wolverine modal', () => {
    browser.url('');
    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();
    HeaderPage.heroFactsLink.click();
    HeaderPage.wolverineOption.click();
    browser.pause(2000);

    assert.equal(HeaderPage.wolverineModalWidnow.isDisplayed(), true, 'Modal is not displayed');
    assert.equal(HeaderPage.wolverineModalTitleText.getText(), 'Wolverine Fact', 'Text is different');
    assert.equal(
      HeaderPage.wolverineModalContentText.getText(),
      'Wolverine made his first comic book appearance in 1974.',
      'text is not equal'
    );
  });

  it('should close wolverin modal', () => {
    browser.url('');
    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();
    HeaderPage.heroFactsLink.click();
    HeaderPage.wolverineOption.click();
    browser.pause(1000);
    assert.equal(HeaderPage.wolverineModalWidnow.isDisplayed(), true, 'modal is displayed');
    HeaderPage.wolverineModalCloseButton.click();
    browser.pause(1000);
    assert.equal(HeaderPage.wolverineModalWidnow.isDisplayed(), false, 'Modal is still displayed');
  });

  it('should open spiderman modal', () => {
    browser.url('');
    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();
    browser.pause(2000);
    HeaderPage.heroFactsLink.click();
    browser.pause(2000);
    HeaderPage.spidermanOption.click();
    browser.pause(2000);

    assert.equal(HeaderPage.spidermanModalWidnow.isDisplayed(), true, 'Modal is not displayed');
    assert.equal(HeaderPage.spidermanModalTitleText.getText(), 'Spider-Man Fact', 'Text is different');
    assert.equal(
      HeaderPage.spidermanModalContentText.getText(),
      'Spider-man was created by Stan Lee and Steve Ditko and first appeared in 1962.',
      'text is not equal'
    );
  });

  it('should close spiderman modal', () => {
    browser.url('');
    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();
    HeaderPage.heroFactsLink.click();
    HeaderPage.spidermanOption.click();
    browser.pause(1000);
    assert.equal(HeaderPage.spidermanModalWidnow.isDisplayed(), true, 'modal is displayed');
    HeaderPage.spidermanModalCloseButton.click();
    browser.pause(1000);
    assert.equal(HeaderPage.spidermanModalWidnow.isDisplayed(), false, 'Modal is still displayed');
  });

  it('should search for wolverine', () => {
    browser.url('');
    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();
    HeaderPage.searchField.setValue('wolverine');
    HeaderPage.searchButton.click();
    browser.pause(2000);
    assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
    assert.equal(browser.getAlertText(), 'Wolverine is awesome!', 'Allert text is not equal');
  });

  it('should error when you don/t search for wolverine', () => {
    browser.url('');
    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();
    HeaderPage.searchField.setValue('spiderman');
    HeaderPage.searchButton.click();
    browser.pause(2000);
    assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
    assert.equal(
      browser.getAlertText(),
      'Your search for spiderman returned 0 reults. Try something else.',
      'Text is not the same'
    );
  });
  it.only('should close the alert', () => {
    browser.url('');
    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();
    HeaderPage.searchField.setValue('spiderman');
    HeaderPage.searchButton.click();
    browser.pause(2000);
    assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
    browser;
  });
});
