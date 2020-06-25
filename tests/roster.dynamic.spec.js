const assert = require('assert');
const LoginPage = require('../pages/login.page');
const RosterPage = require('../pages/roster.page');

describe('Dynamic roster item suite', () => {
  it.skip('should create single item', () => {
    let heroes = ['Wolverine', 'Iron Man', 'Deadpool', 'Thor', 'Spider-Man'];
    LoginPage.signIn('1@2.com', 'password');

    RosterPage.addHeroField.setValue('Spongbob');
    RosterPage.submitButton.click();

    for (let i = 0; i < heroes.length; i++) {
      assert.equal(RosterPage.rosterItems[i].getText(), heroes[i], `Hero text is not the same`);
    }
  });
  it('should create multiple items', () => {
    let heroes = ['Bob', 'Joe', 'Steve', 'Sally'];
    LoginPage.signIn('1@2.com', 'password');

    for (let i = 0; i < heroes.length; i++) {
      RosterPage.addHeroField.setValue(heroes[i]);
      RosterPage.submitButton.click();
      browser.pause(2000);
    }

    for (let i = 0; i < heroes.length; i++) {
      assert.equal(RosterPage.rosterItems[i + 5].getText(), heroes[i], `Hero text is not the same`);
    }
  });
});
