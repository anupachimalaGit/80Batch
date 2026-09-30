import {test} from '@playwright/test'
import { general } from '../lib/General'

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