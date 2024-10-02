import { $$, $ } from '@wdio/globals';

class SearchResultsPage {

    get searchResults() { return $$('.g'); }
    get morosystemsLink() { return $('a[href="https://www.morosystems.cz/"]'); }

    async getNumberOfResults() {
        return await this.searchResults.length;
    }

    async clickOnMorosystemsLink() {
        await this.morosystemsLink.click();
    }
}

export default new SearchResultsPage();