import { Page } from "@playwright/test";

export class SessionPage {
    constructor(private page: Page) { }

    createSession = this.page.getByRole('button', { name: 'Create Session' })
    sessionTitle = this.page.getByPlaceholder('ex. New Session')
    activityType = this.page.locator('button').filter({ hasText: 'Basic' })
    clientsSelect = this.page.locator('#clients').getByRole('textbox')


    async fillform(sessionName: string, activityName: string, clientsName: string)
        : Promise<void> {

        await this.sessionTitle.fill(sessionName);
        await this.activityType.click();
        await this.page.locator('li', { hasText: activityName }).click()
        await this.clientsSelect.click();
        await this.page.getByRole('option', { name: clientsName }).click();
        //await this.page.locator('li', { hasText: clientsName }).click()


    }



}



// await page.getByRole('button', { name: 'Create Session' }).click();
//             await page.getByPlaceholder('ex. New Session').click();
//             await page.getByPlaceholder('ex. New Session').fill('Test Session');
//             await page.locator('button').filter({ hasText: 'Basic' }).click();
//             await page.getByRole('option', { name: 'Aerobics' }).click();
//             await page.locator('#clients').getByRole('textbox').click();
//             await page.getByRole('option', { name: 'Julia Roberts' }).click();
//             await page.getByRole('option', { name: 'Angelina Jolie' }).click();
//             await page.getByRole('option', { name: 'Live Remote' }).click();
//             await page.getByRole('button', { name: 'Tue, 22-Oct-' }).click();
//             await page.getByLabel('środa, 23 października').click();
//             await page.locator('button').filter({ hasText: 'min' }).click();
//             await page.getByRole('option', { name: '60 min' }).click();
//             await page.locator('button').filter({ hasText: '13:' }).click();
//             await page.getByRole('option', { name: '14:00' }).click();
//             await page.locator('#ms-live-remote').getByRole('button', { name: 'Create Session' }).click();
//             await page.getByRole('heading', { name: 'Session created successfully' }).click();
//             await page.getByLabel('Session created successfully').click();
