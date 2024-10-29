import { expect, Locator, Page } from "@playwright/test"
import { common } from "../fixtures/common";

export class Generic {
  readonly rndInt: number;

  constructor(private page: Page) {
    this.rndInt = Math.floor(Math.random() * 100) + 1;
  }

  async visitPage(url: string) {
    await this.page.goto(url);
    await expect(this.page).toHaveURL(url)
  }

  async clickElement(element: Locator) {
    this.isVisible(element);
    await element.click();
  }

  async verifyText(element: Locator, text: string | RegExp) {
    this.isVisible(element);
    await expect(element).toHaveText(text);
  }

  async isVisible(element: Locator) {
    await expect(element).toBeVisible();
  }

  async isNotVisible(element: Locator) {
    await expect(element).not.toBeVisible();
  }

  async typeText(element: Locator, input: string) {
    this.isVisible(element);
    await element.fill(input);
    await expect(element).toHaveText(input);
  }

  async isNotChecked(element: Locator) {
    await expect(element).not.toBeChecked();
  }

  async isChecked(element: Locator) {
    await expect(element).toBeChecked();
  }

  async isDisabled(element: Locator) {
    await expect(element).toBeDisabled();
  }

  async isNotDisabled(element: Locator) {
    await expect(element).not.toBeDisabled();
  }

  async typeAndVerifyInput(element: Locator, value: string) {
    this.isVisible(element);
    await element.fill(value);
    await expect(element).toHaveValue(value);
  }

  async verifyLink(element: Locator, link: string) {
    this.isVisible(element);
    await expect(element).toHaveAttribute(common.selector.attribute.name.href, link)
  }

  async isEmpty(element: Locator) {
    this.isVisible(element);
    await expect(element).toBeEmpty();
  }

  async haveValidClass(element: Locator, valid: string | RegExp) {
    this.isVisible(element);
    await expect(element).toHaveClass(valid);
  }

  async haveInvalidClass(element: Locator, invalid: string | RegExp) {
    this.isVisible(element);
    await expect(element).not.toHaveClass(invalid);
  }

  async verifyLogoAndTitle(logo: Locator) {
    await this.isVisible(logo);
    await expect(this.page).toHaveTitle(common.text.pageTitle);
  }

  async verifyUrl(url: string) {
    await expect(this.page).toHaveURL(url)
  }
}
