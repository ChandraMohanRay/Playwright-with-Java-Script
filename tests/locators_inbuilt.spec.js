const {test,expect}= require ('@playwright/test')
test('locators_inbuilt',async({page})=>{

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

 const logo= await page.getByAltText('company-branding')
//  Get by Alt text  locatote the value in below expect will check logo is present or not 
 await expect(logo).toBeVisible()

//  page.getByPlaceholder() --> to locate the elements by palceHolder 
// username
await page.getByPlaceholder('username').fill('Admin')
//password
await page.getByPlaceholder('Password').fill('admin123')
//  click on ligin button  by using get by role 
page.getByRole('button',{type:"submit"}).click()

// await expect(usrname = await page.getByText('GeorgeRichard Wills')).toBeVisible()
// console.log(usrname);
//locate the elemant as username is changing multiple times so we will locate and cmpare the existing name 
// textContent()is used to extact the content from the page 
const name = await page.locator('//*[@class="oxd-userdropdown-name"]').textContent()
await expect(await page.getByText(name)).toBeVisible()
console.log(name);
await page.close();
