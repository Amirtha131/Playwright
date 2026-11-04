import {test} from '@playwright/test'

test.only('Handle New Tab', async({page,context})=>{
    await page.goto('https://demoqa.com/browser-windows');
    const newpagepromise = context.waitForEvent('page');
    await page.locator('#tabButton').click();
    const newpage = await newpagepromise;
    await newpage.waitForLoadState();
    console.log(newpage.url());
    await newpage.bringToFront();
    await page.locator('#windowButton').click();
    await page.waitForTimeout(5000);
    const Totalpage = page.context().pages();
    console.log(Totalpage.length);
})
