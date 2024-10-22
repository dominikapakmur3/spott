import { test, expect } from '@playwright/test'
import { LoginPage } from '../../pages/login.page';
import { loginData } from '../../test-data/login.data'
import { SessionPage } from '../../pages/session.page';


test.describe('add session', () => {

    let sessionPage: SessionPage

    test.beforeEach(async ({ page }) => {

        const userId = loginData.userId;
        const userPassword = loginData.userPassword;

        await page.goto('/');
        const loginPage = new LoginPage(page);
        await loginPage.login(userId, userPassword)

        sessionPage = new SessionPage(page);
    });

    test.only('add single session',
        { tag: ["@singlesession"] }, async ({ page }) => {

            const sessionName = 'Test session'
            const activityName = 'Boxing'
            const clientsName = 'Angelina Jolie'

            await page.getByRole('button', { name: 'Create Session' }).click();
            await sessionPage.fillform(sessionName, activityName, clientsName)


            // await page.getByRole('button', { name: 'Create Session' }).click();
            // await page.getByPlaceholder('ex. New Session').click();
            // await page.getByPlaceholder('ex. New Session').fill('Test Session');
            // await page.locator('button').filter({ hasText: 'Basic' }).click();
            // await page.getByRole('option', { name: 'Aerobics' }).click();
            // await page.locator('#clients').getByRole('textbox').click();
            // await page.getByRole('option', { name: 'Julia Roberts' }).click();
            // await page.getByRole('option', { name: 'Angelina Jolie' }).click();
            // await page.getByRole('option', { name: 'Live Remote' }).click();
            // await page.getByRole('button', { name: 'Tue, 22-Oct-' }).click();
            // await page.getByLabel('środa, 23 października').click();
            // await page.locator('button').filter({ hasText: 'min' }).click();
            // await page.getByRole('option', { name: '60 min' }).click();
            // await page.locator('button').filter({ hasText: '13:' }).click();
            // await page.getByRole('option', { name: '14:00' }).click();
            // await page.locator('#ms-live-remote').getByRole('button', { name: 'Create Session' }).click();
            // await page.getByRole('heading', { name: 'Session created successfully' }).click();
            // await page.getByLabel('Session created successfully').click();













        })

}); 
