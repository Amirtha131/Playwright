import {test} from '@playwright/test'

test('Webtable',async({page})=>{
await page.goto('https://demoqa.com/webtables')
const column = page.locator('//table//th');
console.log("Total columns:", await column.count());
console.log("Total rows:", await page.locator('//table//tbody//tr').count());

const row = page.locator('//table//tbody//tr');
console.log("Total rows is:", await row.count());

const rowdata = page.locator('//table//tbody//tr[2]//td');
console.log("The row data is:", await rowdata.allTextContents());

const specificdata = page.locator('//table//tbody//tr[2]//td[4]');
console.log("The specific data is:", await specificdata.allTextContents());

for(let i=0; i< await row.count(); i++){

const cells = row.nth(i).locator('td');
    for(let j=0; j< await column.count(); j++){
        console.log(await cells.nth(j).innerText());
    }
}
})