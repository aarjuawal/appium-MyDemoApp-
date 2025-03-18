const { $, browser } = require('@wdio/globals');


const catalog = require('../pageobjects/catalog');
const LoginPage = require('../pageobjects/login.page');
const Webview = require('../pageobjects/webview');
const Drawing = require('../pageobjects/drawing');
const Product=require('../pageobjects/product');
const Sort =require('../pageobjects/sort_by');
const About=require('../pageobjects/about');

describe('API Demos', () => {
    it('should perform login and navigate', async () => {
        await catalog.clickMenu();
        await catalog.clickCatalog();
        await catalog.clickMenu();
        // await LoginPage.login("bod@example.com", "10203040");
        await catalog.clickMenu();
        await Webview.click_webview("https://www.google.com");
    });

    it('should click drawing and draw a rectangle', async () => {
        await catalog.clickMenu()
        await DrawingPage.clickDrawing();
        await DrawingPage.drawRectangle();
    });
    
    it('should add product to cart', async () => {
        await catalog.clickMenu();
        await catalog.clickCatalog();
        await Product.click_product();
        await Product.click_add_to_cart();
        await Product.click_my_cart();
        await Product.click_proceed_to_cart();
        await Product.cart("abc@gmail.com", "1001");
        await Product.checkout("abc","abc","cbx","abc","BKT",999,"Nepal");
        await Product.payment_method("abc", "3251 1234 4569 7896" , "03/20" , 1235);
        await Product.click_place_order();
        await Product.click_continue_shopping();
    });

    it('should arrange the order' , async() => {
        await Sort.sorting();

    });

    it('navigate to About page',async()=>{
        await catalog.clickMenu();
        await About.click_about();
        await About.click_go_to_the_sauce_labs_website();
    });
});







