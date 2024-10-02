import { $, browser } from '@wdio/globals';

class GooglePage {

    get searchBar() { return $('[name="q"]'); }
    get rejectCookiesButton() { return $('button=Odmítnout vše'); }  

    async open() {
        await browser.url('https://www.google.com');
    }

    async rejectCookiesIfPresent() {
        if (await this.rejectCookiesButton.waitForDisplayed({ timeout: 3000 })) {
            await this.rejectCookiesButton.click();
        } else {
            console.log('Google cookies dialog was not displayed.');
        }
    }

    async searchFor(query: string) {
        await this.searchBar.setValue(query);
        await browser.keys('Enter'); 
    }
}

export default new GooglePage();
