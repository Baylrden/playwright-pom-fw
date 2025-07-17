class InventoryPage {
  constructor(page) {
    this.page = page;
    this.firstProduct = page.locator('#item_4_title_link');
    this.hamburgerMenuBtn = page.locator('#react-burger-menu-btn');
    this.logoutBtn = page.locator('#logout_sidebar_link');
  }

  async clickHamburgerBtn() {
   await this.hamburgerMenuBtn.click();
  }

  async clickLogout() {
    await this.logoutBtn.click();
  }

  async logout() {
    await this.clickHamburgerBtn();
    await this.clickLogout();
  }

}

module.exports = InventoryPage;