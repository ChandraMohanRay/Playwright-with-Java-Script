import{test,expect} from '@playwright/test'

test('Handlle CheckBOX',async({page})=>{
  await page.goto('https://qavalidation.com/demo-form/')
//selecting check box  of skills functional skills 

 await page.locator('//*[text()="Functional testing"]').check()
 // now checking the checkbox is selected or not using assertion 
await expect(await page.locator('//*[text()="Functional testing"]')).toBeChecked()
await expect(await page.locator('//*[text()="Functional testing"]').isChecked()).toBeTruthy()

await page.waitForTimeout(5000);

// handling multiple checkbox using for loop 

const checkboxLocators=[
  '//*[text()="API testing"]',
  '//*[text()="Automation testing"]',
  '//*[text()="DB testing"]'
];
for(const locator of checkboxLocators)
{
  await page.locator(locator).check();
}
await page.waitForTimeout(5000);

//uncheck the multiple checkbox 
for(const locator of checkboxLocators)
//before unchikeng we are checking the checkbox is cheked or not using if 
if(await page.locator(locator).isChecked())
await page.locator(locator).uncheck()

await page.waitForTimeout(5000);
})