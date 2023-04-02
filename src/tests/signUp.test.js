import { By, until } from "selenium-webdriver";
import { describe, it } from "mocha";
import { assert } from "chai";
import "chromedriver";
import { createDriver } from "../utils/createDriver.js";
import { emailParams } from "../data/email.js";
import { firstNameParams } from "../data/firstName.js";
import { passwordParams } from "../data/password.js";
import { confirmPasswordParams } from "../data/confirmPassword.js";

describe("'Sign up' form fields validation tests", () => {
    let driver;

    before(async () => {
        driver = await createDriver("chrome");
        await driver.get(process.env.SIGN_UP_URL);
        await driver.wait(until.elementLocated(By.xpath("//button[contains(@data-tid,'banner-accept') and contains(text(), 'Accept')]")), 10000).click();
        // Sleep is required because the website refreshes the page after accepting the cookies/privacy policy
        await driver.sleep(1000);
    });

    afterEach(async () => {
        await driver.navigate().refresh();
    })

    after(async () => {
        await driver.quit();
    });

    describe("'First name' field", () => {
        firstNameParams.forEach((elementInArray) => {
            it(elementInArray.title, async () => {
                await driver.wait(until.elementLocated(By.xpath("//input[@id='firstName']")), 10000).sendKeys(elementInArray.firstNameValue);
                await driver.findElement(By.xpath("//button[@type='submit']")).click();
                await driver.sleep(100);
                const errorFirstName = await driver.findElement(By.xpath("//input[@id='firstName']/parent::div/following-sibling::p[1]")).getText();
                assert.strictEqual(errorFirstName, elementInArray.firstNameMsg);
            });
        });
    });

    describe("'Email' field", () => {
        emailParams.forEach((elementInArray) => {
            it(elementInArray.title, async () => {
                await driver.wait(until.elementLocated(By.xpath("//input[@id='email']")), 10000).sendKeys(elementInArray.emailValue);
                await driver.findElement(By.xpath("//button[@type='submit']")).click();
                await driver.sleep(100);
                const errorEmail = await driver.findElement(By.xpath("//input[@id='email']/parent::div/following-sibling::p[1]")).getText();
                assert.strictEqual(errorEmail, elementInArray.emailMsg);
            });
        });
    });

    describe("'Country' select field", () => {
        it("Country is not selected", async () => {
            await driver.wait(until.elementLocated(By.xpath("//button[@type='submit']")), 10000).click();
            await driver.sleep(100);
            const errorCountryMsg = await driver.findElement(By.xpath("//button[@id='headlessui-listbox-button-:r0:']/parent::div/following-sibling::p[1]")).getText();
            assert.strictEqual(errorCountryMsg, "Field is required");
        })

        it("Country is selected", async () => {
            await driver.wait(until.elementLocated(By.xpath("//*[@id='headlessui-listbox-button-:r0:']")), 10000).click();
            await driver.wait(until.elementLocated(By.xpath("//span[contains(text(), 'Poland')]")), 10000).click();
            await driver.findElement(By.xpath("//button[@type='submit']")).click();
            await driver.sleep(100);
            const errorCountryMsg = await driver.findElement(By.xpath("//button[@id='headlessui-listbox-button-:r0:']/parent::div/following-sibling::p[1]")).getText();
            assert.strictEqual(errorCountryMsg, "");
            // Checking if the value is correctly selected from the custom select
            const countrySelected = await driver.findElement(By.xpath("//*[@id='headlessui-listbox-button-:r0:']/span[1]")).getText();
            assert.strictEqual(countrySelected, "Poland");
        })
    })

    describe("'Password' field", () => {
        passwordParams.forEach((elementInArray) => {
            it(elementInArray.title, async () => {
                await driver.wait(until.elementLocated(By.xpath("//input[@id='password']")), 10000).sendKeys(elementInArray.passwordValue);
                await driver.findElement(By.xpath("//button[@type='submit']")).click();
                await driver.sleep(100);
                const errorPassword = await driver.findElement(By.xpath("//input[@id='password']/parent::div/following-sibling::p[1]")).getText();
                assert.strictEqual(errorPassword, elementInArray.passwordMsg);
            })
        })
    })

    describe("'Confirm password' field", () => {
        confirmPasswordParams.forEach((elementInArray) => {
            it(elementInArray.title, async () => {
                await driver.wait(until.elementLocated(By.xpath("//input[@id='password']")), 10000).sendKeys(elementInArray.passwordValue ?? '');
                await driver.findElement(By.xpath("//input[@id='confirmPassword']")).sendKeys(elementInArray.confirmPasswordValue);
                await driver.findElement(By.xpath("//button[@type='submit']")).click();
                await driver.sleep(100);
                const errorConfirmed = await driver.findElement(By.xpath("//input[@id='confirmPassword']/parent::div/following-sibling::p[1]")).getText();
                assert.strictEqual(errorConfirmed, elementInArray.confirmPasswordMsg);
            })
        })
    })
});