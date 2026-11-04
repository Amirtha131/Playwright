import{test} from '@playwright/test';
test ('Demo',async({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html')
    await page.locator('//input[@placeholder="First Name"]').fill('Amirtha');
    await page.locator('//input[@placeholder="Last Name"]').fill('Selvaraj');
    await page.locator('//textarea[@ng-model="Adress"]').fill('AbCD stop');
    await page.locator('//input[@type="email"]').fill('abcd@gmail.com');
    await page.locator('//input[@type="tel"]').fill('9876543210');
    await page.locator('//input[@value="FeMale"]').check();
    await page.locator('//input[@value="Cricket"]').check();
    await page.locator('//input[@id="checkbox2"]').check();
    await page.locator('//div[@id="msdd"]').click();
    await page.getByText('Bulgarian').click();
    await page.getByText('Icelandic').click();
    await page.getByText('Lithuanian').click();
    const selectedvalue = ['Bulgarian', 'Icelandic', 'Lithuanian'];
    selectedvalue.forEach(value => {
    console.log("Selected language:", value);
    });
    await page.locator("body").click({position: {x:10,y:10}});
    const skill = page.locator('//select[@id="Skills"]')
     await skill.selectOption({ label: 'Analytics' });
     const selectedskill = await skill.inputValue();
     console.log ("Selected Skill:", selectedskill);
    await page.locator('//select[@id="countries"]').selectOption({ label:'Select Country'});
    await page.locator('.select2-container').click()
    await page.locator('#select2-country-results').getByText('India').click();
    await page.locator('//select[@id="yearbox"]').selectOption('2003');
    await page.locator('//select[@placeholder="Month"]').selectOption('January');
    await page.locator('//select[@id="daybox"]').selectOption('13');
    await page.locator('//input[@id="firstpassword"]').fill('abcd@1234');
    await page.locator('#secondpassword').fill('abcd@1234');

    //Alert
    await page.locator('//a[text()="SwitchTo"]').click();
    await page.locator('//a[text()="Alerts"]').click();
    page.once('dialog',async dialog =>{
        console.log(dialog.message());
        await dialog.accept();
        })
    page.locator('//div[@class=" nav nav-tabs"]');
    await page.locator('//button[@onclick="alertbox()"]').click();

   //confirmation dialog box
    page.once('dialog',async dialog =>{
        console.log(dialog.message());
        await dialog.dismiss();
     })
    await page.locator('//a[@href="#CancelTab"]').click();
    await page.locator('//button[@onclick="confirmbox()"]').click();

    //prompt dialog box
    page.once('dialog',async dialog =>{
        console.log(dialog.message());
       await dialog.accept("Text is getting filled")
       console.log("Text is getting filled");
    })
    await page.locator('//a[@href="#Textbox"]').click();
    await page.locator('//button[@onclick="promptbox()"]').click();

});

