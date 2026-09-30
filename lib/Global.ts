// To Provide test data & objects / elements related to whole application
import {Page} from '@playwright/test';
export class global{

    constructor(public page : Page) {

    }

    //****************** Test Data ***************/
    public url:string="https://sureshitacademy.in//hrms/login.php"
    public username : string ="sureshit"
    public password : string ="sureshit"
    public empfirstName: string= "AnushaHyd"
    public emplastName: string= "Pachimala"


    //****************** Objects ***************/
    public textbox_loginname: string = "//input[@name='txtUserName']"
    public textbox_password: string  = "//input[@name='txtPassword']"
    public button_link : string      = "//input[@type='Submit']"
    public link_logout : string      = "//a[text()='Logout']"
    public empInfo_frame:string = "//iframe[@id='rightMenu']"
    public button_addEmp: string = "//input[@value='Add']"
    public textbox_firstName: string = "//input[@name='txtEmpFirstName']"
    public textbox_lastName: string = "//input[@name='txtEmpLastName']"
    public button_Save:string = "//input[@value='Save']"
    public btn_PIM : string = "//span[text()='PIM']"
    
}