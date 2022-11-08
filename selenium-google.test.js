const {Builder, By, Key, until} = require('selenium-webdriver');
require('dotenv').config();

describe('Google Search', () => {
    let driver;
    
    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
    });
    
    afterAll(async () => {
        await driver.quit();
    });

    const setDelay = async() => {
        await driver.sleep(1000);
    };
    
    it('should open google.com', async () => {
        await driver.get(process.env.url);
        await driver.getTitle().then(title => {
            expect(title).toEqual('Google');
        });
    });
});