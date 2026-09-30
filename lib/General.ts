// To Provide all reusable functions/ methods related to whole application
import {global} from "./Global"
export class general extends global{

//****************/ User-Defined Reusbale FUnctions / Methods************//
async openapplication(){
await this.page.goto(this.url)
console.log("Application opened successfully")
}
async login(){
    await this.page.locator(this.textbox_loginname).fill(this.username)
    await this.page.locator(this.textbox_password).fill(this.password)
    await this.page.locator(this.button_link).click()
    //await this.page.locator(this.link_logout).click()
}

async addNewEmployee(){
    const frame= this.page.frameLocator(this.empInfo_frame)
    await frame.locator(this.button_addEmp).click()
    await frame.locator(this.textbox_firstName).fill(this.empfirstName)
    await frame.locator(this.textbox_lastName).fill(this.emplastName)
    await frame.locator(this.button_Save).click()
    console.log("Emp added successfully")
}
async waitStmt(){
    await this.page.waitForTimeout(3000)
    console.log("Waited for 3 sec")
}
async logout(){

    await this.page.locator(this.link_logout).click()
    console.log("Logout completed")

}
}