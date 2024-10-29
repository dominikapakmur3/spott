import { test, expect } from '@playwright/test'
import { LoginPage } from '../../pages/login.page';
import { loginData } from '../../test-data/login.data'
import { createSessionPage } from '../../pages/create_session.page';
import { Generic } from '../../methods/generic';
import { landingPage } from '../../pages/landing.page';
import { common } from "../../fixtures/common";


test.describe('add session', () => {
    let method: Generic;
    let landing: landingPage;
    let createSession: createSessionPage;

    let sessionPage: createSessionPage

    test.beforeEach(async ({ page }) => {

        method = new Generic(page);
        landing = new landingPage(page);
        createSession = new createSessionPage(page);

        await method.visitPage(common.url.login)

        const userId = loginData.userId;
        const userPassword = loginData.userPassword;

        await page.goto('/');
        const loginPage = new LoginPage(page);
        await loginPage.login(userId, userPassword)

        sessionPage = new createSessionPage(page);
    });

    test.only('fill form and add with present day',
        { tag: ["@singlesession"] }, async ({ page }) => {

            const sessionName = `UniqueText_${Date.now()}`
            const activityName = 'Boxing'
            const clientsName = 'Angelina'
            const sessionCreated = 'Session created successfully'

            await sessionPage.openSessionModal() // - > pobranie funkcji z page
            await sessionPage.selectSessionType(createSession.sessionTypeInPerson) // funkcja page 
            const generatedTitle = await createSession.generateSessionTitle(common.text.title.inPerson); //Plik common - kolejno elementy 
            await createSession.fillSessionTitle(createSession.sessionTitleInput, generatedTitle)
            await createSession.selectSessionClients(1);
            const selectedClient = await createSession.getSelectedClient();
            await createSession.selectFutureDay();
            await createSession.setFutureStartTime();
            await method.isNotDisabled(createSession.createSessionWindowButton);
            await method.clickElement(createSession.createSessionWindowButton);
            await landing.verifyConfirmationPopup(common.text.confirmationPopup.success);
            await landing.isSessionCreated(generatedTitle);
            await landing.verifySessionDetails
                (common.text.sessionDetails.type.inPerson,
                    `${common.text.sessionDetails.label.singleParticipant}
            ${selectedClient}`, `${common.text.sessionDetails.label.activityType}
             ${common.text.activities.basic}`);
            await landing.removeSession();
            await landing.verifyConfirmationPopup(common.text.confirmationPopup.removed);
            await landing.isSessionRemoved();



        })


















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

});

// test('fill form',
//     { tag: ["@singlesession"] }, async ({ page }) => {



//     })







