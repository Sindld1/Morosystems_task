import { $ } from '@wdio/globals';
import { MoroHomePage } from './morosystemsHomePage'

class MoroCareerPage extends MoroHomePage {
    get careerHeader() { return $('h1'); } 

    async open() {
        await $("=KARIÉRA").click();
        await this.waitForPageLoad();
    }
}

export default new MoroCareerPage();

