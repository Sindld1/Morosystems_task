import { ReportAggregator } from 'wdio-html-nice-reporter';
let reportAggregator: ReportAggregator;

export const config: WebdriverIO.Config = {

    runner: 'local',
    tsConfigPath: './tsconfig.json',

    specs: [
        './tests/specs/**/*.ts' // Cesta k testovacím souborům
    ],
    // Patterns to exclude
    exclude: [],

    maxInstances: 10,
    capabilities: [
        {
            browserName: 'chrome',
        },
        {
            browserName: 'firefox'
        },
        {
            browserName: 'MicrosoftEdge'
        }
    ],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.morosystems.cz',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'jasmine',

    reporters: ['spec',
        ['html-nice', {
            outputDir: './reports/html-reports',
            filename: 'report.html',
            reportTitle: 'Morosystems FE test report',
            showInBrowser: true,
            collapseTests: false,
            useOnAfterCommandForScreenshot: true,
            browserName: '' // Toto bude nastaveno později pomocí beforeSession
        }]
    ],

    // Hook pro přípravu reportéru HTML
    onPrepare: async function (config, capabilities) {

        reportAggregator = new ReportAggregator({
            outputDir: './reports/html-reports',
            filename: 'master-report.html',
            reportTitle: 'Master Report',
            browserName: '' // Prohlížeče nelze vložit automaticky
        });
         reportAggregator.clean();
    },

    beforeSession: function (config, capabilities, specs) {
        let browserName = 'unknown';

        // Kontrola a načtení browserName z capabilities
        if ('browserName' in capabilities && typeof capabilities.browserName === 'string') {
            browserName = capabilities.browserName;
        }
        // Zaktualizujte browserName v reportéru HTML, pokud je to možné
        if (config.reporters) {
            config.reporters.forEach((reporter) => {
                if (Array.isArray(reporter) && reporter[0] === 'html-nice') {
                    (reporter[1] as any).browserName = browserName;
                }
            });
        }
    },

    // Hook po dokončení všech testů
    onComplete: async function () {
        if (reportAggregator) {
            await reportAggregator.createReport();
        }
    },

    before: function () {
        browser.maximizeWindow(); // Maximalizuje okno prohlížeče před spuštěním testů
    },

    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot(); // Uloží screenshot v případě selhání testu
        }
    },

    jasmineOpts: {
        defaultTimeoutInterval: 60000,
        expectationResultHandler: function (passed, assertion) {
            // Toto můžete použít, pokud chcete specifické chování při výsledcích testu
        }
    }
};
