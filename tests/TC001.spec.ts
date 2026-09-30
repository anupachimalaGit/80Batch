//---To provide actual automation test scripts / steps
import {test} from '@playwright/test'
import { general } from '../lib/General'

test("Login & Logout", async({page})=>{
//---Test Steps
    let obj=new general(page);
    await obj.openapplication()
    await obj.login()
    await obj.logout()


})