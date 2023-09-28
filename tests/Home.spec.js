

const {test,expect}=require('@playwright/test'); // importing the module and to packages test and expect 

//start writing test in test block 
//creating anannonous function  page fecture before addd async before page add await 
//beacasue java script is asynchorized programming language  
// it will not go step by step not depecnd on previous steps 
//promise 
test('Home Page',async({page})=>{
await page.goto('https://demoblaze.com/');

const pageTitle= await page.title();
console.log('page title is:',pageTitle);
await expect(page).toHaveTitle('STORE');

const pageurl=page.url();
console.log('page url is:',pageurl);

await expect(page).toHaveURL('https://demoblaze.com/');
await page.close();

//comments adds
} )


