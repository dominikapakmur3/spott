import { Locator, Page } from "@playwright/test"
import { common } from "../fixtures/common";
import { Generic } from "../methods/generic"
import dayjs from 'dayjs';
import { landingPage } from "../pages/landing.page";

export class createSessionPage {
    readonly sessionTitleInput: Locator;
    readonly sessionClientsInput: Locator;
    readonly sessionTypeRemote: Locator;
    readonly sessionTypeInPerson: Locator;
    readonly sessionTypePrescribed: Locator;
    readonly createSessionWindowButton: Locator;
    readonly sessionClients: Locator;
    readonly startTime: Locator;
    readonly startTimeDropdown: Locator;
    readonly datepicker: Locator;
    readonly selectedDay: Locator;
    readonly startTimeSet: Locator;
    readonly futureStartTime: string;
    readonly futureStartDate: string;
    readonly sessionTypeName: string;
    readonly singleClient: Locator;
    readonly outsideClients: Locator;

    readonly generic = new Generic(this.page);
    readonly landing = new landingPage(this.page);

    readonly now = dayjs();

    constructor(private page: Page) {
        this.outsideClients = page.locator(common.selector.generic.outside);
        this.sessionTitleInput = page.getByPlaceholder('ex. New Session');
        this.sessionClientsInput = page.locator(common.selector.createSessionPage.clientsInput);
        this.sessionTypeRemote = page.getByRole('option', { name: common.text.type.liveRemote });
        this.sessionTypeInPerson = page.getByRole('option', { name: common.text.type.liveInPerson });
        this.sessionTypePrescribed = page.getByRole('option', { name: common.text.type.prescribed });
        this.createSessionWindowButton = page.locator(common.selector.createSessionPage.createSessionButton).getByText(common.text.createSession);
        this.sessionClients = page.locator(common.selector.createSessionPage.sessionClientsList);
        this.singleClient = this.page.locator(common.selector.createSessionPage.singleClient).nth(0);
        this.startTime = page.getByRole("combobox").nth(4).locator(common.selector.createSessionPage.actualTimeValue);
        this.startTimeDropdown = page.locator(common.selector.createSessionPage.startTimeDropdown);
        this.datepicker = page.locator(common.selector.generic.datepicker);
        this.futureStartDate = this.now.add(1, 'day').format('dddd, MMMM D, YYYY').toString();
        this.selectedDay = page.getByLabel(this.futureStartDate);
        this.futureStartTime = (this.roundToNearest5Minutes(this.now)).add(15, 'minutes').format('HH:mm').toString();
        this.startTimeSet = page.getByRole('option', { name: this.futureStartTime });
    }

    roundToNearest5Minutes(time) {
        const roundedMinute = (time.minute() - time.minute() % 5);
        return time.set('minutes', roundedMinute);
    };

    async openSessionModal() {
        await this.generic.clickElement(this.landing.createSessionMainButton);
    }

    async selectSessionType(sessionType) {
        await this.generic.clickElement(sessionType);
    }

    async fillSessionTitle(element: Locator, title: string) {
        await this.generic.clickElement(element);
        await this.generic.typeAndVerifyInput(element, title);
    }

    async selectSessionClients(clients: number) {
        await this.generic.clickElement(this.sessionClientsInput);
        for (let i = 0; i < clients; i++) {
            await this.generic.clickElement(this.singleClient);

        }
        await this.generic.clickElement(this.outsideClients);
        return clients
    }

    async getSelectedClient() {
        const singleClient = this.page.locator('tag')
        const selectedClient = await singleClient.innerText();
        return selectedClient
    }

    async selectFutureDay() {
        await this.generic.clickElement(this.datepicker);
        await this.generic.clickElement(this.selectedDay);
    }

    async setFutureStartTime() {
        await this.generic.clickElement(this.startTime);
        await this.generic.isVisible(this.startTimeDropdown);
        await this.generic.clickElement(this.startTimeSet);
    }

    generateSessionTitle(title: string) {
        title = title + this.generic.rndInt
        return title;
    };
}