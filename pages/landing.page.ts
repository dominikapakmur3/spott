import { Locator, Page } from "@playwright/test"
import { Generic } from "../methods/generic"
import { common } from "../fixtures/common";

export class landingPage {
    readonly userMenuToggle: Locator;
    readonly userMenuList: Locator;
    readonly signOutButton: Locator;
    readonly createSessionMainButton: Locator;
    readonly confirmationPopup: Locator;
    pwTestSessionEntity: Locator;
    readonly deleteSessionButton: Locator;
    readonly confirmButton: Locator;
    readonly sessionSingleParticipantDetails: Locator;
    readonly sessionActivityTypeDetails: Locator;
    readonly sessionTypeDetails: Locator;
    readonly sessionTitle: string;

    readonly generic = new Generic(this.page);

    constructor(private page: Page) {
        this.userMenuToggle = page.locator(common.selector.landingPage.userMenuToggle);
        this.userMenuList = page.locator(common.selector.landingPage.userMenuList);
        this.signOutButton = page.locator(common.selector.landingPage.userMenuItem, { hasText: common.text.signOut });
        this.createSessionMainButton = page.locator(common.selector.landingPage.createSession);
        this.confirmationPopup = page.locator(common.selector.landingPage.confirmationPopup);
        //this.deleteSessionButton = page.getByText(common.text.delete);
        this.deleteSessionButton = page.locator('div.outline-button.button-cancel')
        this.confirmButton = page.getByText(common.text.confirm);
        this.sessionSingleParticipantDetails = page.locator(common.selector.landingPage.sessionDetail).nth(2);
        this.sessionActivityTypeDetails = page.locator(common.selector.landingPage.sessionDetail).nth(3);
        this.sessionTypeDetails = page.locator(common.selector.landingPage.sessionDetail).nth(0);
    }

    async verifyConfirmationPopup(text: string) {
        await this.generic.verifyText(this.confirmationPopup, text);
        await this.generic.isNotVisible(this.confirmationPopup);
    }

    async isSessionCreated(generatedTitle: string) {
        this.pwTestSessionEntity = this.page.locator(common.selector.landingPage.calendarSession, { hasText: generatedTitle }).first();
        await this.generic.isVisible(this.pwTestSessionEntity);
    }

    async isSessionRemoved() {
        await this.generic.isNotVisible(this.pwTestSessionEntity);
    }

    async verifySessionDetails(sessionType: string | RegExp, sessionCustomer: string | RegExp, sessionActivity: string | RegExp) {
        await this.generic.clickElement(this.pwTestSessionEntity);
        await this.generic.verifyText(this.sessionTypeDetails, `${common.text.sessionDetails.label.sessionType} ${sessionType}`);
        await this.generic.verifyText(this.sessionSingleParticipantDetails, sessionCustomer);
        await this.generic.verifyText(this.sessionActivityTypeDetails, sessionActivity);
    }

    async removeSession() {
        await this.generic.clickElement(this.deleteSessionButton);
        await this.generic.clickElement(this.confirmButton);
    }
}
