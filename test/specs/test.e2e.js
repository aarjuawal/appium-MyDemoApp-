const { expect, browser } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
describe('API Demos', () => {
    it('should click accessibility', async () => {
        await browser.pause(5000);
        const accessibility = await $("~Accessibility");
        await accessibility.click()
        const querrying = await $("~Accessibility Node Querying");
        await querrying.click()
        const checkBox = await $('(//android.widget.CheckBox[@resource-id="io.appium.android.apis:id/tasklist_finished"])[4]');
        await checkBox.click();
        await $('(//android.widget.CheckBox[@resource-id="io.appium.android.apis:id/tasklist_finished"])[3]').click()       
        await browser.back()
        await browser.back()
    })
    it('should click accessibility', async () => {
        await browser.pause(5000);
        const accessibility = await $("~Accessibility");
        await accessibility.click()
        const querrying = await $("~Accessibility Node Querying");
        await querrying.click()
        const checkBox = await $('(//android.widget.CheckBox[@resource-id="io.appium.android.apis:id/tasklist_finished"])[4]');
        await checkBox.click();
        await $('(//android.widget.CheckBox[@resource-id="io.appium.android.apis:id/tasklist_finished"])[3]').click()       
        await browser.back()
        await browser.back()
    })
    it("should touch and drag on the screen", async () => {
        await browser.pause(2000);
        const accessibility = await $("~Animation");
        await accessibility.click()
        const bouncingBalls = await $("~Bouncing Balls");
        await bouncingBalls.waitForExist({ timeout: 5000 }); // Ensure it exists
        await bouncingBalls.click();
        await browser.pause(3000); // Wait for UI to update
        // Touch at (100, 500) and drag to (500, 1000)
        await browser.performActions([
            {
                type: "pointer",
                id: "finger1",
                parameters: { pointerType: "touch" },
                actions: [
                    { type: "pointerMove", duration: 0, x: 100, y: 500, origin: "viewport" }, // Move to start position
                    { type: "pointerDown", button: 0 }, // Touch down
                    { type: "pause", duration: 1000 }, // Hold for 1 second
                    { type: "pointerMove", duration: 1000, x: 500, y: 1000, origin: "viewport" }, // Drag to new position
                    { type: "pointerUp", button: 0 }, // Release touch
                ],
            },
        ]);
        await browser.pause(2000); // Observe the effect
        await browser.back();
        await browser.back();
    });
    it('should click on app', async () => {
        await browser.pause(5000);
        const app = await $("~App");
        await app.click()
        const actionBar = await $("~Action Bar");
        await actionBar.waitForDisplayed({ timeout: 5000 });
        await actionBar.click()
        const actionMechanics = await $("~Action Bar Mechanics");
        await actionMechanics.click();
        await browser.back()
        const actionBarTabs = await $("~Action Bar Tabs");
        await actionBarTabs.click();
        const addNewTab= await $("~Add new tab");
        await addNewTab.click();
        await browser.back()
        await browser.back()
        await browser.back()
    })

    it('should click views', async () => {
        await browser.pause(5000); 
        
        const app = await $("~Views");
        await app.click();  
    
        const animation = await $("~Animation");
        await animation.click();  
    
        const transition = await $("~3D Transition");
        await transition.click();  
    
        const lyon = await $('//android.widget.TextView[@resource-id="android:id/text1" and @text="Lyon"]');

        await lyon.click();  
    
        await browser.back();  
    
        const shake = await $("~Shake");  
        await shake.click();  
  
        const enterPassword = await $("id:io.appium.android.apis:id/pw"); 
        await enterPassword.setValue("steve"); 

        const login = await $("~Login");
        await login.click()
        await browser.back()

        const push = await $("~Push");
        await push.click()
        const push1 = await $("id:android:id/text1");
        await push1.click()
        const left = await $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Push left"]')
        await left.click()
        const push2 = await $("id:android:id/text1");
        await push2.click()
        const Hyperspace = await $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Hyperspace"]')
        await Hyperspace.click()
        await browser.back()
        await browser.back()
        await browser.back()

    })
    it.only("should go to views and picker", async () => {
        browser.pause(2000);
        const views = await $("~Views");
        await views.click();
        async function scrollUntilElementIsVisible(element, maxSwipes = 5) {
          let isElementVisible = await element.isDisplayed().catch(() => false);
          let swipeCount = 0;
          while (!isElementVisible && swipeCount < maxSwipes) {
            await browser.performActions([
              {
                type: "pointer",
                id: "finger1",
                parameters: { pointerType: "touch" },
                actions: [
                  {
                    type: "pointerMove",
                    duration: 0,
                    x: 500,
                    y: 1500,
                    origin: "viewport",
                  },
                  { type: "pointerDown", button: 0 },
                  {
                    type: "pointerMove",
                    duration: 500,
                    x: 500,
                    y: 500,
                    origin: "viewport",
                  },
                  { type: "pointerUp", button: 0 },
                ],
              },
            ]);
            await browser.pause(1000);
            isElementVisible = await element.isDisplayed().catch(() => false);
            swipeCount++;
          }
          if (!isElementVisible) {
            throw new Error("Element not found after scrolling!");
          }
          await element.click();
        }
        // Locate "Picker" and scroll to it
        const myElement = await $("~Picker");
        await scrollUntilElementIsVisible(myElement);
        browser.pause(5000);
        await browser.performActions([
          {
            type: "pointer",
            id: "finger1",
            parameters: { pointerType: "touch" },
            actions: [
              {
                type: "pointerMove",
                duration: 0,
                x: 551,
                y: 300,
                origin: "viewport",
              },
              { type: "pointerDown", button: 0 },
              {
                type: "pointerMove",
                duration: 500,
                x: 500,
                y: 700,
                origin: "viewport",
              },
              { type: "pointerUp", button: 0 },
            ],
          },
        ]);
        await browser.pause(5000);
        await browser.back();
      });
    });
    
    
    
    
    
    
    
 
    
