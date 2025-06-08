const LoginPage = async(page)=>{
    const userName = page.locator('[name="username"]');
    const password = page.locator('[name="password"]');

    async function login(username,password){
        await userName.fill(username);
        await password.fill(password);
    }
    return{
        login
        chandu
    }       
}