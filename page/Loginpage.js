export class Loginpage{
    constructor(page){
        this.page = page
        this.username = page.locator('//input[@id="username"]')
        this.password = page.locator('//input[@id="password"]')
        this.clicklogin = page.locator('//input[@id="login"]')
    }

    async gotourl() {
        await this.page.goto('https://adactinhotelapp.com/')
    }
    async enterusername(name){
        await this.username.fill(name)
    }
    async enterpassword(password){
        await this.password.fill(password)
    }
    async clickloginbutton(){
        await this.clicklogin.click()
    } 
}