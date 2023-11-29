import { Selector } from 'testcafe';

class IcsClassesPage {
  constructor() {
    this.pageId = '#ics-classes-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const icsClassesPage = new IcsClassesPage();