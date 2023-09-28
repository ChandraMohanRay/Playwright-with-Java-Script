import {test,expect}from '@playwright/test'

test('assertion',async({page})=>{
  //open url 
  await page.goto('https://demo.nopcommerce.com/')
// now check same url opend or not by using expect 
// await expect(page).toHaveURL('https://demo.nopcommerce.com/')
// await expect(url=await page.toHaveURL('https://google.com'))
const title=await expect(page).toHaveTitle('nopCommerce demo store')
console.log(title);

await expect(page).toHaveURL('https://demo.nopcommerce.com/')

})