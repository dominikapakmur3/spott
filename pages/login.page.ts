import { Page } from "@playwright/test";

export class LoginPage {
    constructor(private page: Page) { }

    loginInput = this.page.locator('input[type="email"]');
    passwordInput = this.page.locator('input[type="password"]');
    loginButton = this.page.getByRole('button', { name: 'Sign In', exact: true });

    async login(userId: string, userPassword: string): Promise<void> {
        await this.loginInput.fill(userId);
        await this.passwordInput.fill(userPassword);
        await this.loginButton.click();
    }
}