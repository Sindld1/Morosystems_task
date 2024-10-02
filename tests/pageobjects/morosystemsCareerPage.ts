import { $, browser } from '@wdio/globals';
import { MoroHomePage, homeUrl } from './morosystemsHomePage'
const careerUrl = homeUrl + '/kariera'

class MoroCareerPage extends MoroHomePage {
    get careerHeader() { return $('h1'); } 

    async open() {
        await browser.url(careerUrl);
        await this.waitForPageLoad();
    }
    }

export default new MoroCareerPage();

