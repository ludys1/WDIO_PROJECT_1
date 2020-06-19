class HeaderPage {
  get logoutLink() {
    return $('#navbarSupportedContent > ul > li:nth-child(4) > a');
  }
}

module.exports = new HeaderPage();
