import { By, Key, until } from "selenium-webdriver";
import { describe, it } from "mocha";
import { assert } from "chai";
import "chromedriver";
import { createDriver } from "../utils/createDriver.js";
import { testsMail } from "../data/mail.js";
import { testsFirstName } from "../data/firstName.js";
import { testsPassword } from "../data/password.js";
import { testsConfirmPassword } from "../data/confirmPassword.js";

describe("'Sign up' form validation tests", () => {
    let driver;

    beforeEach(async () => {
        driver = await createDriver("chrome");
        await driver.get(process.env.SIGN_UP_URL);
        await driver.wait(until.elementLocated(By.xpath("//button[contains(@data-tid,'banner-accept') and contains(text(), 'Accept')]")), 10000).click();
        // sleep is required because the website refreshes the page after accepting the cookies/privacy policy
        await driver.sleep(1000);
    });

    afterEach(async () => {
        await driver.quit();
    });

    it("Test creating an account without filling in the fields", async () => {
        await driver.findElement(By.xpath("//button[@type='submit']")).click();
        const errorFirstName = await driver.findElement(By.xpath("//input[@id='firstName']/parent::div/following-sibling::p[1]")).getText();
        assert.strictEqual(errorFirstName, "Field is required");
    });

    describe("Tests correct and incorrect data in field 'First name'", () => {
        testsFirstName.forEach((elementInArray) => {
            it(elementInArray.title, async () => {
                await driver.findElement(By.xpath("//input[@id='firstName']")).sendKeys(elementInArray.firstNameValue);
                await driver.findElement(By.xpath("//button[@type='submit']")).click();
                const errorFirstName = await driver.findElement(By.xpath("//input[@id='firstName']/parent::div/following-sibling::p[1]")).getText();
                assert.strictEqual(errorFirstName, elementInArray.firstNameMsg);
            });
        });
    });

    describe("Tests correct and incorrect data in field 'Email'", () => {
        testsMail.forEach((elementInArray) => {
            it(elementInArray.title, async () => {
                await driver.findElement(By.xpath("//input[@id='email']")).sendKeys(elementInArray.emailValue);
                await driver.findElement(By.xpath("//button[@type='submit']")).click();
                const errorEmail = await driver.findElement(By.xpath("//input[@id='email']/parent::div/following-sibling::p[1]")).getText();
                assert.strictEqual(errorEmail, elementInArray.emailMsg);
            });
        });
    });

    describe("Tests correct and incorrect data in field 'Password'", () => {
        testsPassword.forEach((elementInArray) => {
            it(elementInArray.title, async () => {
                await driver.findElement(By.xpath("//input[@id='password']")).sendKeys(elementInArray.passwordValue);
                await driver.findElement(By.xpath("//button[@type='submit']")).click();
                const errorPassword = await driver.findElement(By.xpath("//input[@id='password']/parent::div/following-sibling::p[1]")).getText();
                assert.strictEqual(errorPassword, elementInArray.passwordMsg);
            })
        })
    })

    describe("Tests 'Confirm password' field", () => {
        testsConfirmPassword.forEach((elementInArray) => {
            it(elementInArray.title, async () => {
                await driver.findElement(By.xpath("//input[@id='password']")).sendKeys("Abc456!@");
                await driver.sleep(500);
                await driver.findElement(By.xpath("//input[@id='confirmPassword']")).sendKeys(elementInArray.confirmPasswordValue);
                await driver.findElement(By.xpath("//button[@type='submit']")).click();
                const errorConfirmed = await driver.findElement(By.xpath("//input[@id='confirmPassword']/parent::div/following-sibling::p[1]")).getText();
                assert.strictEqual(errorConfirmed, elementInArray.confirmPasswordMsg)
            })
        })
    })

    describe.only("Tests 'Country' select", () => {
        it("Country not selected", async () => {
            await driver.findElement(By.xpath("//*[@id='headlessui-listbox-button-:r0:']")).click();
            await driver.wait(until.elementLocated(By.xpath("//span[contains(text(), 'Poland')]")), 10000).click();
        })
    })
});