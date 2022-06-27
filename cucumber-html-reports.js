const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "cypress/cucumber-json",  
    reportPath: "./reports/cucumber-html-reports.html",
    metadata: {
        browser: {
            name: "chrome",
            version: "96",
        },
        device: "Local test machine",
        platform: {
            name: "window",
            version: "10",
        },
    },
});
