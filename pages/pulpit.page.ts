import { Page } from "@playwright/test";

export class PulpitPage {
    constructor(private page: Page) { }
    expectedElement = this.page.locator('h3.title', { hasText: 'Calendar' })
}