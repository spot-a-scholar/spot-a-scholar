import { Selector } from 'testcafe';

class LandingPage {
  constructor() {
    this.pageId = '#landing-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Go to sign in page. */
  async gotoSignInPage(testController) {
    await testController.click('#landing-sign-in');
  }
}

export const landingPage = new LandingPage();
