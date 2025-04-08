const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@wdio/globals'); // Make sure to import `expect` for assertions
const catalog = require('../pageobjects/catalog');
const Webview = require('../pageobjects/webview');

Given('the user is on the catalog screen', async () => {
    await catalog.open();
});

When('the user opens the menu and selects Webview', async () => {
    await catalog.openMenu();  
    await catalog.selectWebviewOption(); 
});

Then('the Webview page should be displayed', async () => {
    const isWebviewDisplayed = await Webview.isDisplayed();
    expect(isWebviewDisplayed).toBe(true); 
});
