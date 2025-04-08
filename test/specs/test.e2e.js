const { expect, browser } = require("@wdio/globals");
const catalog = require('../pageobjects/catalog');
const Webview = require('../pageobjects/webview');
const Drawing = require('../pageobjects/drawing');
const Product = require('../pageobjects/product');
const Sort = require('../pageobjects/sort_by');
const drawing = require("../pageobjects/drawing");

describe('API Demos', () => {
    // before(async () => {
    //     await browser.startRecordingScreen();
    // });
  

    it('should perform login and navigate', async () => {
        await catalog.clickMenu();
        await catalog.clickCatalog();
        const catalogTitle = await $('id:com.saucelabs.mydemoapp.android:id/productTV');
        await expect(catalogTitle).toBeDisplayed();
        await catalog.clickMenu();
        // await Webview.click_webview("https://www.google.com"); 
        await Webview.click_webview("WebView");
        const webviewHeader = await $('android.widget.TextView');
        await expect(webviewHeader).toBeDisplayed();
    
    });

    it('should click drawing and draw a rectangle', async () => {
        await catalog.clickMenu();
        await Drawing.clickDrawing();

        await Drawing.drawRectangle();
        const isClearButtonVisible = await drawing.clear.isDisplayed();
        expect(isClearButtonVisible).toBe(true);
        await drawing.clickClear();
    });

    it.only('should add product to cart', async () => {
        await catalog.clickMenu();
        await catalog.clickCatalog();

        await Product.click_product();

        const productTitle = await $('id:com.saucelabs.mydemoapp.android:id/productTV');
        await expect(productTitle).toBeDisplayed();

        await Product.click_add_to_cart();
        await Product.click_my_cart();
        const cartItemCount = await Product.getCartItemCount(); 
        expect(cartItemCount).toBeGreaterThan(0);
        await Product.click_proceed_to_cart();
        await Product.cart("abc@gmail.com", "1001");
        await Product.checkout("abc", "abc", "cbx", "abc", "BKT", 999, "Nepal");
        await Product.payment_method("abc", "3251 1234 4569 7896", "03/20", 1235);
        await Product.click_place_order();
        await Product.click_continue_shopping();
    });

    it('should arrange the order', async () => {
        await Sort.sorting();
    });

    // after(async () => {
    //     const video = await browser.stopRecordingScreen();
    //     const fs = require("fs");
    //     fs.writeFileSync("recording.mp4", Buffer.from(video, "base64"));
    //     await browser.deleteSession();
    // });
   
});
