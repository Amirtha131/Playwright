import {test} from '@playwright/test';

test ('frames', async({page}) =>{
await page.goto('https://www.playwrightautomation.com/practice.html#section-frame-counting')
const frame = page.frameLocator('#frame-payment-82');
const card = frame.locator('//input[@placeholder="Name on card"]');
await card.fill("Amirtha");
await frame.locator('//input[@placeholder="1234 5678 9012 3456"]').fill('1234 5678 9012 3456');
await frame.locator('//input[@placeholder="MM/YY"]').fill('01/06');
await frame.locator('//input[@placeholder="•••"]').fill('878');
await frame.locator('#btn-pay-now').click();
console.log("Single frame completed");


const nestedframe = page.frameLocator('#frame-feedback');
await nestedframe.locator('//input[@data-testid="feedback-name"]').fill("Varshini");
await nestedframe.locator('#feedback-email').fill('1234@gamil.com');
const secondframe = nestedframe.frameLocator('#frame-travel-prefs');
await secondframe.locator('//input[@value="Solo Traveller"]').click();
await nestedframe.locator('#btn-submit-enquiry').click();
console.log("Nestedframe completed");

});
