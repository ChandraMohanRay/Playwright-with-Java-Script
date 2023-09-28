import{test,expect} from '@playwright/test'

test('radiobutton',async({page})=>{
  
  await page.goto('https://qavalidation.com/demo-form/')

  await page.waitForTimeout(2000);

  // check the radio button 

  await page.locator('//*[@value="2"]').check(); //two year of experiance 

  await page.waitForTimeout(5000); //wait 
  // await page.check('//*[@value="2"]')
// How to check radio button is checked or not 

await expect(page.locator('//*[@value="2"]')).toBeChecked()
await expect.soft(page.locator('//*[@value="2"]').isChecked()).toBeTruthy();

await page.waitForTimeout(5000);

//female radio button is not checked so it should not be checked verifu the status 
await expect(page.locator('//*[@value="1"]').isChecked()).toBeFalsy();

await page.waitForTimeout(5000);

})