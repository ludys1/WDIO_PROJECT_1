class LoginPage {
  get headingText() {
    return $('#login-title');
  }

  get emailLabel() {
    return $('#form-login > div:nth-child(1) > label');
  }

  get emailField() {
    return $('#loginEmail');
  }
  get passwordlLabel() {
    return $('#form-login > div:nth-child(2) > label');
  }

  get passwordField() {
    return $('#loginPassword');
  }

  get rememberLoginCheckBox() {
    return $('#rememberLoginChk');
  }

  get rememberLoginLabel() {
    return $('#form-login > div.form-check > label');
  }

  get submitButton() {
    return $('#form-login > button');
  }

  get overlay() {
    return $('#overlay');
  }

  get navBar() {
    return $('body > div.row > div > nav > button > span');
  }
  signIn(email, password) {
    browser.url('');
    this.emailField.setValue(email);
    this.passwordField.setValue(password);
    this.submitButton.click();
  }
}

module.exports = new LoginPage();
