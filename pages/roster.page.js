class RosterPage {
  get instructionText() {
    return $('body > div.container-fluid > div:nth-child(3) > div > p');
  }

  get wolverineItem() {
    return $('#hero-list > li:nth-child(1)');
  }

  get ironManItem() {
    return $('#hero-list > li:nth-child(2)');
  }

  get deadpoolItem() {
    return $('#hero-list > li:nth-child(3)');
  }

  get thorItem() {
    return $('#hero-list > li:nth-child(4)');
  }

  get spidermanItem() {
    return $('#hero-list > li:nth-child(5)');
  }

  get listTitle() {
    return $('body > div.container-fluid > div:nth-child(4) > h3');
  }

  get heroList() {
    return $('#hero-list');
  }

  get addHeroField() {
    return $('#heroInput');
  }

  get submitButton() {
    return $('#addHero-form > button');
  }

  get addedHeroStarLord() {
    return $('#hero-list > li:nth-child(6)');
  }
}

module.exports = new RosterPage();
