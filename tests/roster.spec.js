const assert = require('assert');
const LoginPage = require('../pages/login.page');
const RosterPage = require('../pages/roster.page');

describe('Roster Test Suite', () => {
  // it.only('should test if header text is correct', () => {
  //   browser.url('');
  //   LoginPage.emailField.setValue('1@2.com');
  //   LoginPage.passwordField.setValue('password');
  //   LoginPage.submitButton.click();
  //   browser.pause(2000);
  //   assert.equal(RosterPage.rosterHeader.getText(), 'Build Your Superhero Roster:', 'text is not equal');
  // });

  // it('should test if you can add Star Lord', () => {
  //   browser.url('');
  //   LoginPage.emailField.setValue('1@2.com');
  //   LoginPage.passwordField.setValue('password');
  //   LoginPage.submitButton.click();
  //   browser.pause(2000);
  //   RosterPage.addHeroField.setValue('Star Lord');
  //   RosterPage.addHeroButton.click();
  //   assert.equal(RosterPage.addedHeroStarLord.getValue(), 'Star Lord', 'Star Lord was not added');
  // });

  it('should check if all strings are correct', () => {
    browser.url('');
    LoginPage.emailField.setValue('1@2.com');
    LoginPage.passwordField.setValue('password');
    LoginPage.submitButton.click();

    var instructions =
      'Imagine that you are tasked with building a team of Superheros to save the world. We have given you a few heroes to start with. Add as many heroes as you would like to round out your dream team.';
    var title = 'Build Your Superhero Roster:';

    assert.equal(RosterPage.instructionText.getText(), instructions, 'Instruction text is not correct');
    browser.pause(1000);
    assert.equal(RosterPage.listTitle.getText(), title, 'Tittle text is not correct');
    browser.pause(1000);
    assert.equal(RosterPage.wolverineItem.getText(), 'Wolverine', 'Wolverine text is not the same!');
    browser.pause(1000);
    assert.equal(RosterPage.ironManItem.getText(), 'Iron Man', 'Iron Man text is not the same!');
    browser.pause(1000);
    assert.equal(RosterPage.deadpoolItem.getText(), 'Deadpool', 'Deadpool text is not the same!');
    browser.pause(1000);
    assert.equal(RosterPage.thorItem.getText(), 'Thor', 'Thor text is not the same!');
    browser.pause(1000);
    assert.equal(RosterPage.spidermanItem.getText(), 'Spider-Man', 'Spider-Man text is not the same!');
    browser.pause(1000);
    assert.equal(
      RosterPage.addHeroField.getAttribute('placeholder'),
      'Enter Hero',
      'Placeholder attribute is not correct'
    );
  });
});
