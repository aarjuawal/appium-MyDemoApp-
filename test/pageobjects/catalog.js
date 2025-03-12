const { $ } = require('@wdio/globals');
const Page = require('./page');

class Catalog extends Page {
    get viewMenu () {
        return $('~View menu');
    }
    get catalogmenu(){
        return $('//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/itemTV" and @text="Catalog"]');
    }
  

    async clickMenu () {  
        await this.viewMenu.click();
    }

    async clickCatalogue(){
        await this.catalogmenu.click()
    }
    
} 

module.exports = new Catalog();
