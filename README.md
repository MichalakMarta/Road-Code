The repository contains form field validation automated tests at https://roadcode.cc/sign-up

Wrote with:  **JavaScript**, **Selenium WebDriver**, **Mocha** & **Chai**.
<br /><br />
 
To run the tests, please enter in terminal:
```
npm install
npm test
```
 <br />

![Screenshot of testing the user registration form](https://github.com/MichalakMarta/Road-Code/blob/main/SignUpScreenshot.png?raw=true)
 <br />

Test cases

| Field       | Title | Value           | Expected result  |
| ------------- |:-------------:| -----:|-----:|
| "First name"      | Field is empty | null | Error message (Field is required)|
| "First name"   |Field is not empty | 1      |   Field was filled in correctly (no additional validation) |
| "Email" | null      | | Error message (Field is required)   |
| "Email" |   Email has valid format | mail@test.pl  |  Field was filled in correctly   |
| "Email" |    Email without @ |mail@   |  Error message (Invalid email address)   |
| "Email" |    Email without domain |mail@test   | Error message (Invalid email address)  |
| "Email" |    Email with incorrect domain |mail.test.pl   | Error message (Invalid email address)  |
| "Email" |    Email without user name |@test.pl   | Error message (Invalid email address)  |
| "Email" |    Email too long (above 60 characters) | *value above 60 characters   | Error message (Field must not contain more than 60 characters(s))  |
| "Email" |    Email with max allowed characters length (60) |*value = 60 characters   |  Field was filled in correctly  |
| "Country" |   Country is not selected | null   | Error message (Field is required)  |
| "Country" |   Country is selected | Poland   | Field was filled in correctly (no additional validation)  |
| "Password" |   Field is empty | null   | Error message (Field is required)  |
| "Password" |   Password correct | Abc456!@   | Field was filled in correctly  |
| "Password" |   Password too short (below 8 characters) | Abc456!   |Error message*  |
| "Password" |   Password without uppercase letter |abc456!@  |Error message*  |
| "Password" |   Password without lowercase letter |ABCdef!@  |Error message*  |
| "Password" |   Password without number |Abc45678  |Error message*  |
| "Password" |   Password without special character |ABC456!@  |Error message*  |
| "Password" |   Password too long (above 50 characters) |*value above 50 characters  |Error message (Field must not contain more than 50 characters(s))  |
| "Password" |  Password with max allowed characters length (50) |*value = 50 characters  |Field was filled in correctly  |
| "Confirm password" |  Field is empty |null  |Error message (Field is required)  |
| "Confirm password" |  Password matches (password value: 'Abc456!@') |Abc456!@  |Field was filled in correctly  |
| "Confirm password" |  Different password (password value: 'Abc456!@') |123  |Error message (Passwords are not the same) |

 <br />
Error message* is "Password should be at least 8 characters long and contain at least one uppercase and one lowercase letter, one number and one special character".



