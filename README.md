# Installation steps:
install node.js from website
npm install ts-node typescript -D
npm init wdio .
- @wdio/local-runner@latest
- @wdio/jasmine-framework@latest
- @wdio/spec-reporter@latest
- wdio-html-nice-reporter
- wdio-wait-for
- @types/jasmine

# Run test with command:
npx wdio run wdio.conf.ts

# Used browsers:
- chrome
- firefox
- edge

# Used reporters:
- spec-reporter
- wdio-html-nice-reporter

# Results in 
./reports/html-reports/
for agregated reports - master-report.html
in case of failure, printscreens are saved