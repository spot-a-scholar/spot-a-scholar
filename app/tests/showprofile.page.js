import { Selector } from 'testcafe';

class ShowProfilePage {
  constructor() {
    this.pageId = '#show-profile-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const showProfilePage = new ShowProfilePage();
