const assert = require('assert');
const LoginPage = require('../pages/login.page');
const HeaderPage = require('../pages/header.page');

describe('Login Test Suite', () => {
  it('should display error when password is missing', () => {
    browser.url('');
    LoginPage.emailField.setValue('test@test.com');
    LoginPage.submitButton.click();
    assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
    assert.equal(browser.getAlertText(), 'Please enter an email and password', 'Alert text is not equal');
    browser.pause(500);
    browser.acceptAlert();

    assert.equal(browser.isAlertOpen(), false, 'Alert is still open');

    browser.pause(500);
  });

  it('should display error when email is missing', () => {
    browser.url('');
    LoginPage.passwordField.setValue('blah');
    LoginPage.submitButton.click();

    assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
    assert.equal(browser.getAlertText(), 'Please enter an email and password', 'Allert text is not equal');
    browser.pause(500);
    browser.acceptAlert();

    assert.equal(browser.isAlertOpen(), false, 'The alert is still open');
    browser.pause(500);
  });

  it('should display error when email and password is missing', () => {
    browser.url('');
    LoginPage.submitButton.click();
    assert.equal(browser.isAlertOpen(), true, 'Alert is not opened');
    assert.equal(browser.getAlertText(), 'Please enter an email and password', 'Allert text is not equal');
    browser.pause(500);
    browser.acceptAlert();

    assert.equal(browser.isAlertOpen(), false, 'The alert is still open');
    browser.pause(500);
  });

  it('should dipslay error when email is incorrect', () => {
    browser.url('');
    LoginPage.emailField.setValue('fake@fake.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();
    assert.equal(browser.getAlertText(), 'Invalid email and password', 'Allert text is not equal');
    browser.pause(500);
    browser.acceptAlert();

    assert.equal(browser.isAlertOpen(), false, 'The alert is still open');
    browser.pause(500);
  });

  it('should display error when password is incorrect', () => {
    browser.url('');
    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('passwords');
    LoginPage.submitButton.click();
    assert.equal(browser.getAlertText(), 'Invalid email and password', 'Allert text is not equal');
    browser.pause(500);
    browser.acceptAlert();

    assert.equal(browser.isAlertOpen(), false, 'The alert is still open');
    browser.pause(500);
  });

  it('should display error when password case is incorrect', () => {
    browser.url('');
    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('Password');
    LoginPage.submitButton.click();
    assert.equal(browser.getAlertText(), 'Invalid email and password', 'Allert text is not equal');
    browser.pause(500);
    browser.acceptAlert();

    assert.equal(browser.isAlertOpen(), false, 'The alert is still open');
    browser.pause(500);
  });

  it('should login with valid email and password', () => {
    browser.url('');
    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();
    assert.equal(LoginPage.overlay.isDisplayed(), false, 'Overlay is still displayed');
    browser.pause(500);
  });
  it('should remember login creds', () => {
    browser.url('');
    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.rememberLoginCheckBox.click();
    LoginPage.submitButton.click();
    assert.equal(LoginPage.overlay.isDisplayed(), false, 'Overlay is still displayed');
    browser.pause(500);
    HeaderPage.logoutLink.click();
    browser.pause(500);

    assert.equal(LoginPage.overlay.isDisplayed(), true, 'Overlay is not displayed');
    assert.equal(LoginPage.emailField.getValue(), '1@2.com', 'value is not the same');
    assert.equal(LoginPage.passwordField.getValue(), 'password', 'value is not the same');
    assert.equal(LoginPage.rememberLoginCheckBox.isSelected(), true, 'Checkbox is not selected');
  });

  it.only('should not remember login creds', () => {
    browser.url('');
    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();
    HeaderPage.logoutLink.click();
    assert.equal(LoginPage.overlay.isDisplayed(), true, 'Overlay is not displayed');
    assert.equal(LoginPage.emailField.getValue(), '', 'value is not the same');
    assert.equal(LoginPage.passwordField.getValue().length, '0', 'value is not the same');
    assert.equal(LoginPage.rememberLoginCheckBox.isSelected(), false, 'Checkbox is selected');
    browser.pause(500);
  });
});
