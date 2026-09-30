//Edit an employee
import {test} from '@playwright/test'
import { global } from '../lib/Global'
import { general } from '../lib/General';

test.describe("Regression Suite", ()=>{

    test("Login & Logout", async({page})=>{
//---Test Steps
    let obj=new general(page);
    await obj.openapplication()
    await obj.login()
    await obj.logout()
})

    test("Add Employee", async({page})=>{
    //Test Steps
    let object = new general(page)
    await object.openapplication()
    await object.waitStmt()
    await object.login()
    await object.waitStmt()
    await object.addNewEmployee()
    await object.waitStmt()
    await object.logout()
    await object.waitStmt()
})
})