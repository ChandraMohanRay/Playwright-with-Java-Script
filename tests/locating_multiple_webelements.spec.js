const {test,expect} = require('@playwright/test')

test('multipleLocators',async({page})=>{

  await page.goto('https://demoblaze.com/')
  
// capturing all the anchor tags here 
// page.waitForSelector("//div[@id='tbodyid']//h4/a");
// await.$$('locators')
  const links = await page.$$("//div[@id='tbodyid']//h4/a");
  for(const link of links)
  {
const linktext= await links.textContent;
console.log(linktext);


  }
  await page.close();
})