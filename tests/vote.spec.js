const assert = require('assert');
const LoginPage = require('../pages/login.page');
const VotePage = require('../pages/vote.page');

describe('Test Suite', () => {
  it('should increment vote', () => {
    browser.url('');
    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    let originalValue = VotePage.voteItemVal1.getText();

    VotePage.submitButton.click();
    assert.equal(VotePage.voteItemVal1.getText(), ++originalValue, 'Values are not the same');
    browser.pause(2000);
    assert.equal(VotePage.thanksAlert.isDisplayed(), true, 'Alert is not displayed');
  });

  it('should test something else');
});
