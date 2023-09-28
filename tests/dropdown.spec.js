import{test,expect} from '@playwright/test'

test('dropdown',async({page})=>{

 await page.goto('https://qavalidation.com/demo-form/')
 //select one option from dropdown ,multiple ways 
 //1st get the locators of dropdown
//  page.locator('xpath').selectOption({label:'value'})
await page.locator('//*[@id="g4072-qatools"]').selectOption({value:'Appium'})

await page.waitForTimeout(5000)

})