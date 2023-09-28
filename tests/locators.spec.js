// const {test, expect}=require('@playwright/test');
// //another way to import is 
import {test,expect} from '@playwright/test'
test('Loacators',async({page})=>{
  await page.goto('https://demoblaze.com/')
  //await page.locator('locator').click()
  // another way to click 
  // await page.click('locator')
  // click on login button 
  await page.click('id=login2')
  //provide userName
  await page.fill('//*[@id="loginusername"]','pavanol')
  // another way to fill in the input box 
  // await page.type('//*[@id="loginusername"]')
  // provide Password
  await page.fill('//*[@id="loginpassword"]','test@123')
  await page.click('//button[text()="Log in"]')
  // verify logout link is present 
  // create a variable logout 
  // usge page.locator to locate the  //*[@name="g4072-fullname"] of logout button 
  // give await expect .tobevisible 
  // close the page 

  const logoutlink= await page.locator('//*[@id="logout2"]')
  await expect (logoutlink).toBeVisible();
  await page.close()


})