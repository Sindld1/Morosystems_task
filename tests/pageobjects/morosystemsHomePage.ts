import { $ } from '@wdio/globals';

class MoroHomePage {
    get acceptCookiesButton() {return $('#cookiescript_accept');}
    get homeHeader() { return $('h1'); }

    async acceptMoroCookies() {
        if (await this.acceptCookiesButton.waitForDisplayed({ timeout: 3000 })) {
            await this.acceptCookiesButton.click();
        } else {
            console.log('Morosystems cookies dialog was not displayed.');
        }
    }
    async waitForPageLoad() {
        await this.homeHeader.waitForDisplayed({ timeout: 5000, timeoutMsg: 'Home page header was not displayed' });
    }

    async verifyPageLoaded(arg: string) {
        const headerText = await this.homeHeader.getText();
        return headerText.includes(arg);
    }

}

export { MoroHomePage };
export default new MoroHomePage();
