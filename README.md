# Installation steps:
install node.js from website
npm i -g typescript 
npm i -g ts-node 
npm init wdio .
- @wdio/local-runner@latest
- @wdio/jasmine-framework@latest
- @wdio/spec-reporter@latest
- wdio-video-reporter
- wdio-html-nice-reporter
- wdio-wait-for
- @types/jasmine

# Run test with command:
npx wdio run wdio.conf.ts