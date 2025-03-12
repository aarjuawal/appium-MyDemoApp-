const { expect, browser } = require('@wdio/globals');
const LoginPage = require('../pageobjects/login.page');
const catalog = require('../pageobjects/catalog.js');
const DrawingPage = require('../pageobjects/drawing.js');
const SecurePage = require('../pageobjects/secure.page');



describe('API Demos', () => {
  it('should click the menu', async () => {
    await catalog.clickMenu()
    await catalog.clickCatalogue()
    await catalog.clickMenu()
    await LoginPage.login("aarzu","awal");



  });
  it.only('should click the drawing', async () => {
  await catalog.clickMenu()
  await DrawingPage.clickDrawing();
  await DrawingPage.drawRectangle();
  await DrawingPage.clearDrawing();
  });
});
 
    
    
    
    
    
 
    
