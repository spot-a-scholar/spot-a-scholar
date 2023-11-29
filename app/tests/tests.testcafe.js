import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { navBar } from './navbar.component';
import { createMeetingPage } from './createmeeting.page';
import { homePage } from './home.page';
import { calendarPage } from './calendar.page';
import { icsClassesPage } from './icsclasses.page';
import { createProfilePage } from './createprofile.page';
import { showProfilePage } from './showprofile.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme' };

fixture('meteor-application-template-react localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that login works and redirects to home page. Then checks all pages', async (testController) => {
  await landingPage.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  // eslint-disable-next-line no-restricted-globals
  await testController.eval(() => location.reload(true));
  await homePage.isDisplayed(testController);
  await navBar.gotoCreateMeetingPage(testController);
  await createMeetingPage.isDisplayed(testController);
  await navBar.gotoCalendarPage(testController);
  await calendarPage.isDisplayed(testController);
  await navBar.gotoListICSClassesPage(testController);
  await icsClassesPage.isDisplayed(testController);
  await navBar.gotoCreateProfilePage(testController);
  await createProfilePage.isDisplayed(testController);
  await navBar.gotoShowProfilePage(testController);
  await showProfilePage.isDisplayed(testController);
});
