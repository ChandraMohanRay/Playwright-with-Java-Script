

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
/*
const {test, expect} = require('@playwright/test')
const{page}=require('../hooks/Base')


exports.NewopportunityPage = class NewopportunityPage{
    constructor(page){
        this.page=page
        this.page.setDefaultTimeout(60000)
        this.usernameinput="//input[@type='email']"
        this.nextbtn ="//input[@type='submit']"
        this.password ="//input[@name='passwd']"
        this.signinbtn ="//input[@data-report-event='Signin_Submit']"
        this.nobtn ="//input[@type='button']"
        this.sitemap ='Site Map'
        this.homepage='Home'
        this.opportunitybtn='Opportunities'
        this.newbtn='New'
        this.topicfield="//input[@aria-label='Topic']"
        this.savebtn="//button[@data-id='opportunity|NoRelationship|Form|Mscrm.Form.opportunity.Save']"
        this.productbtn="//li[@data-id='tablist-Product_Line_Items']"
        this.pricesearchtext="//input[@aria-label='Price list, Lookup']"
        this.pricesearch="//button[@aria-label='Search records for Price list, Lookup field']"
        this.pricevalue='Products and Packaged Services'
        this.addproductbtn='Add product'
        this.existingproduct="//input[@aria-label='Existing Product, Lookup']"
        this.existingsearch="//button[@aria-label='Search records for Existing Product, Lookup field']"
        this.existingvalue='ArmBand 100'
        this.saveandclose='Save & Close'
        this.saveandclose1="//button[@data-id='opportunityproduct|NoRelationship|Form|Mscrm.Form.opportunityproduct.SaveAndClose']"
        this.quotebtn="//li[@data-id='tablist-QUOTES']"
        this.addnewquotebtn="//button[@data-id='quote|NoRelationship|SubGridStandard|Mscrm.SubGrid.quote.AddNewStandard']"
        this.quotelinebtn="//li[@aria-label='Quote Lines']"
        this.openreqbtn="//button[@title='Navigate']"
        this.qtybtn="//input[@data-id='quantity.fieldControl-decimal-number-text-input']"
        this.gobackbtn="//button[@title='Go back']"
        this.qulifybtn="(//ul[@aria-label='Business Process Flow']//li/button)[1]"
        this.identiy="//input[@aria-label='Identify Account, Lookup']"
        this.identyfield="//*[@aria-label='Search records for Identify Account, Lookup field']"
        this.identyvalue='A Datum Corporation'
        this.nextstage="//button[@aria-label='Next Stage']"
        this.closebutton="//button[@id='MscrmControls.Containers.ProcessStageControl-CancelContainer']"
        this.slectproject="//li[@aria-label='opportunity1']"
        this.feildservice="//li[@aria-label='Field Service']"
        this.fieldservicetext="//input[@value='---']"
        this.fieldsearch="//button[@aria-label='Search records for Work Order Type, Lookup field']"
        this.feildvalue='Diagnosis and Repair'
        this.topribben="//button[@title='More commands for Opportunity']"
        this.coverttoworkorder='Convert to Work Order'
        this.confirmbtn="//button[@data-id='confirmButton']"
        this.okbutton="//button[@aria-label='OK']"
        this.workorderno="//input[@aria-label='Work Order Number']"
        this.profilebtn ="//div[@id='mectrl_headerPicture']"
        this.signoutbtn ="//button[@aria-label='Sign out of this account']"










    }
    async login(){
        await this.page.goto('https://org76b9a2f7.crm.dynamics.com/main.aspx?app=d365default&forceUCI=1&pagetype=dashboard&id=2701de60-8f2a-48a4-8262-4a35ca7441fa&type=system&_canOverride=true')
        await this.page.locator(this.usernameinput).fill('chitradandge@chitradandge.onmicrosoft.com')
        await this.page.locator(this.nextbtn).click()
        await this.page.locator(this.password).fill('Krishu@11')
        await this.page.locator(this.signinbtn).click()
        await this.page.locator(this.nobtn).click()
        //await this.page.getByRole('button',{name:this.sitemap}).click()
        await this.page.waitForTimeout(5000)
        await this.page.getByText(this.homepage).click()
    }

        async creatingthenewopportunity(){


        await this.page.getByAltText(this.opportunitybtn).click()
        await this.page.getByAltText(this.newbtn).click()
        await this.page.locator(this.topicfield).fill('opportunity1')
        await this.page.waitForTimeout(3000)
        await this.page.locator(this.savebtn).click()
        }


        async addtheproject(){

        await this.page.locator(this.productbtn).click()
        await this.page.locator(this.pricesearchtext).click()
        await this.page.locator(this.pricesearch).click()
        await this.page.getByText(this.pricevalue).click()
        await this.page.getByText(this.addproductbtn).click()
        await this.page.locator(this.existingproduct).click()
        await this.page.locator(this.existingsearch).click()
        await this.page.getByText(this.existingvalue).click()
        await this.page.waitForTimeout(7000)
        await this.page.locator(this.saveandclose1).click()
        await this.page.waitForTimeout(7000)
    

        
    }
    async createnewquote(){
        await this.page.locator(this.quotebtn).click()
        await this.page.locator(this.addnewquotebtn).click()
        await this.page.locator(this.quotelinebtn).click()
        await this.page.locator(this.openreqbtn).click()
        await this.page.locator(this.qtybtn).fill('2')
        await this.page.getByAltText(this.saveandclose).click()
        await this.page.locator(this.gobackbtn).click()
        await this.page.locator(this.gobackbtn).click()
        await this.page.locator(this.qulifybtn).click()
        await this.page.locator(this.identiy).click()
        await this.page.locator(this.identyfield).click()
        await this.page.getByText(this.identyvalue).click()
        await this.page.keyboard.press('End')
        await this.page.locator(this.nextstage).click()
        await this.page.locator(this.slectproject).click()
        await this.page.waitForTimeout(3000)
        await this.page.locator(this.nextstage).click()
        await this.page.locator(this.closebutton).click()
        await this.page.getByAltText(this.saveandclose).click()
        await this.page.waitForTimeout(7000)
        await this.page.locator(this.feildservice).click()
        await this.page.locator(this.fieldservicetext).click()
        await this.page.locator(this.fieldsearch).click()
        await this.page.getByText(this.feildvalue).click()
        await this.page.locator(this.savebtn).click()
        //await this.page.locator(this.gobackbtn).click()
        await this.page.locator(this.topribben).click()
        //await this.page.waitForTimeout(7000)
        await this.page.getByAltText(this.coverttoworkorder).click()
        await this.page.locator(this.confirmbtn).click()
        //await this.page.waitForTimeout(7000)
        //await this.page.locator(this.okbutton).click()
        await this.page.waitForTimeout(3000)
        const workId = await this.page.locator(this.workorderno).getAttribute('value')
        console.log('Work order number: ' + workId)
        




    }
    async signout(){
        await this.page.locator(this.profilebtn).click()
        await this.page.locator(this.signoutbtn).click()


    }


    
    







}
*/
//comments adds
} )


