import {test,expect} from '@playwright/test'

test('inputbox',async({page})=>{

  await page.goto('https://qavalidation.com/demo-form/')
//to pass the input in inputbox 
  // await page.locator('//*[@name="g4072-fullname"]').fill('John')
  

  //  when we want to  check the inputnbox is enabaled,edittable,alredy filled with values 
  await expect( page.locator('//*[@name="g4072-fullname"]')).toBeVisible();
  // before passing the data check it is empty or not 
  await expect.soft( page.locator('//*[@name="g4072-fullname"]')).toBeEmpty();
  //is editable or not 
  await expect( page.locator('//*[@name="g4072-fullname"]')).toBeEditable();
  //element  is enabled or not 
  await expect( page.locator('//*[@name="g4072-fullname"]')).toBeEnabled();

  await page.fill('//*[@name="g4072-fullname"]','john')

  await page.waitForTimeout(5000);

  
})