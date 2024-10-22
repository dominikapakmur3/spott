import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { loginData } from '../test-data/login.data';
import { PulpitPage } from '../pages/pulpit.page';

test.describe('User login to Spott', () => {

    let loginPage: LoginPage

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        loginPage = new LoginPage(page);


    });

    test('successful login with correct credentials',
        { tag: ["@login"] }, async ({ page }) => {

            const userId = loginData.userId
            const userPassword = loginData.userPassword
            const expectedElement = 'Calendar'

            await loginPage.login(userId, userPassword)

            const pulpitPage = new PulpitPage(page);
            await expect(pulpitPage.expectedElement).toHaveText(expectedElement)

        });
}); 