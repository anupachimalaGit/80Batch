# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC002.spec.ts >> Add Employee
- Location: tests\TC002.spec.ts:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//iframe[@id=\'rightMenu\']').contentFrame().locator('//input[@value=\'Add\']')

```

# Page snapshot

```yaml
- generic [active] [ref=f3e1]:
  - table [ref=f3e2]:
    - rowgroup [ref=f3e3]:
      - row [ref=f3e4]:
        - cell [ref=f3e5]
        - cell [ref=f3e7]
  - table [ref=f3e8]:
    - rowgroup [ref=f3e9]:
      - row [ref=f3e10]:
        - cell [ref=f3e11]:
          - table [ref=f3e12]:
            - rowgroup [ref=f3e13]:
              - row [ref=f3e14]:
                - cell [ref=f3e15]
                - cell [ref=f3e16]
                - cell [ref=f3e17]
                - cell [ref=f3e18]
                - cell [ref=f3e19]
                - cell [ref=f3e20]
  - generic [ref=f3e21]:
    - table [ref=f3e22]:
      - rowgroup [ref=f3e23]:
        - row [ref=f3e24]:
          - cell [ref=f3e25]
          - cell [ref=f3e26]:
            - table [ref=f3e27]:
              - rowgroup [ref=f3e28]:
                - row [ref=f3e29]:
                  - cell [ref=f3e30]
                  - cell [ref=f3e31]:
                    - table [ref=f3e33]:
                      - rowgroup [ref=f3e34]:
                        - row [ref=f3e35]:
                          - cell [ref=f3e36]
                          - cell [ref=f3e37]
                        - row [ref=f3e38]:
                          - cell "Login Name :" [ref=f3e39]
                          - cell [ref=f3e40]:
                            - textbox [ref=f3e41]
                        - row [ref=f3e42]:
                          - cell "Password :" [ref=f3e43]
                          - cell [ref=f3e44]:
                            - textbox [ref=f3e45]
                        - row [ref=f3e46]:
                          - cell [ref=f3e47]:
                            - button "Login" [ref=f3e48]
                          - cell [ref=f3e49]:
                            - button "Clear" [ref=f3e50]
                        - row [ref=f3e51]:
                          - cell [ref=f3e52]
                          - cell [ref=f3e53]:
                            - strong [ref=f3e54]
                  - cell [ref=f3e55]
                  - cell [ref=f3e57]
                - row [ref=f3e58]:
                  - cell [ref=f3e59]
                - row [ref=f3e60]:
                  - cell [ref=f3e61]
                - row [ref=f3e62]:
                  - cell [ref=f3e63]
                  - cell [ref=f3e65]
                - row [ref=f3e66]:
                  - cell [ref=f3e67]
                  - cell [ref=f3e68]:
                    - table [ref=f3e69]:
                      - rowgroup [ref=f3e70]:
                        - row [ref=f3e71]:
                          - cell "Orange HRM comes as a comprehensive solution for the efficient management and development of your Human Resource. It will assist you in the complex and strategic process of managing this crucial resource of your enterprise. Based on modular architecture, it facilitates a vast range of HR activities, with features that reflect the main HR management activities. It comes as a web-enabled application and considering the available flexibility, OrangeHRM is a perfect platform for reengineering your HR processes and achieving a new level of HR Management." [ref=f3e72]
                - row [ref=f3e73]:
                  - cell [ref=f3e74]
                  - cell [ref=f3e76]
                - row [ref=f3e77]:
                  - cell [ref=f3e78]
                  - cell [ref=f3e79]
                - row [ref=f3e80]:
                  - cell [ref=f3e81]
                  - cell [ref=f3e82]
                  - cell [ref=f3e83]
                  - cell [ref=f3e84]
                  - cell [ref=f3e85]
                  - cell [ref=f3e86]
          - cell [ref=f3e87]
    - table [ref=f3e88]:
      - rowgroup [ref=f3e89]:
        - row [ref=f3e90]:
          - cell [ref=f3e91]:
            - link "SureshIT" [ref=f3e92] [cursor=pointer]:
              - /url: "#"
```

# Test source

```ts
  1  | // To Provide all reusable functions/ methods related to whole application
  2  | import {global} from "./Global"
  3  | export class general extends global{
  4  | 
  5  | //****************/ User-Defined Reusbale FUnctions / Methods************//
  6  | async openapplication(){
  7  | await this.page.goto(this.url)
  8  | console.log("Application opened successfully")
  9  | }
  10 | async login(){
  11 |     await this.page.locator(this.textbox_loginname).fill(this.username)
  12 |     await this.page.locator(this.textbox_password).fill(this.password)
  13 |     await this.page.locator(this.button_link).click()
  14 |     await this.page.locator(this.link_logout).click()
  15 | }
  16 | async logout(){
  17 | 
  18 |     await this.page.locator(this.link_logout).click()
  19 |     console.log("Logout completed")
  20 | 
  21 | }
  22 | async addNewEmployee(){
  23 |     const frame= this.page.frameLocator(this.empInfo_frame)
> 24 |     await frame.locator(this.button_addEmp).click()
     |                                             ^ Error: locator.click: Test timeout of 30000ms exceeded.
  25 |     await frame.locator(this.textbox_firstName).fill(this.empfirstName)
  26 |     await frame.locator(this.textbox_lastName).fill(this.emplastName)
  27 |     await frame.locator(this.button_Save).click()
  28 |     console.log("Emp added successfully")
  29 | }
  30 | async waitStmt(){
  31 |     await this.page.waitForTimeout(3000)
  32 |     console.log("Waited for 3 sec")
  33 | }
  34 | }
```