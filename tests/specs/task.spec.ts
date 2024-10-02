import GooglePage from '../pageobjects/googlePage';
import SearchResultsPage from '../pageobjects/searchResultsPage';
import MoroHomePage from '../pageobjects/morosystemsHomePage';
import MoroCareerPage from '../pageobjects/morosystemsCareerPage';
const h1TextCareer :string = 'BUDEME LEPŠÍ';
const h1TextHome :string = "FLEXIBILNÍ VÝVOJ";

describe('Morosystems Task', () => {
    it('should display results for search for MoroSystems in Google', async () => {
        await GooglePage.open();
        await GooglePage.rejectCookiesIfPresent();
        await GooglePage.searchFor('MoroSystems');
        const resultCount = await SearchResultsPage.getNumberOfResults();
        expect(resultCount).toBeGreaterThan(0);
        await SearchResultsPage.clickOnMorosystemsLink();
    });

    it('should click result and get to Morosystems home page', async () => {        
        await MoroHomePage.waitForPageLoad() 
        const isHomePageLoaded = await MoroHomePage.verifyPageLoaded(h1TextHome);
        expect(isHomePageLoaded).toBeTrue();
    });

    it('should display kariera page', async () => {
        await MoroCareerPage.open();
        await MoroCareerPage.waitForPageLoad() 
        const isCareerPageLoaded = await MoroCareerPage.verifyPageLoaded(h1TextCareer);
        expect(isCareerPageLoaded).toBeTrue();
    });
});
