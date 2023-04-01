import { By, Key, until } from "selenium-webdriver";
import { describe, it } from "mocha";
import { assert } from "chai";
import "chromedriver";
import { createDriver } from "../utils/createDriver.js";
import { testsMail } from "../data/mail.js";
import { testsPassword } from "../data/password.js";

describe("Tests 'Sign up' with containing incorrect data", () => {
    let driver;

    beforeEach(async () => {
        driver = await createDriver("chrome");
        await driver.get(process.env.SIGN_UP_URL);
        await driver.wait(until.elementLocated(By.xpath("//button[contains(@data-tid,'banner-accept') and contains(text(), 'Accept')]")), 10000).click();
        // sleep is required because the website refreshes the page after accepting the cookies/privacy policy
        await driver.sleep(1000);
    });

    // afterEach(async () => {
    //     await driver.quit();
    // });

    it("Test creating an account without filling in the fields", async () => {
        // tutaj wypelnianie pola
        await driver.findElement(By.xpath("//button[@type='submit']")).click();
        const errorFirstName = await driver.findElement(By.xpath("//input[@id='firstName']/parent::div/following-sibling::p[1]")).getText();
        assert.strictEqual(errorFirstName, "Field is required");
    });


    testsPassword.forEach((elementInArray) => {
        it(elementInArray.title, async () => {
            await driver.findElement(By.xpath("//input[@id='firstName']")).sendKeys(elementInArray.firstNameValue);
            await driver.findElement(By.xpath("//button[@type='submit']")).click();
            const errorFirstName = await driver.findElement(By.xpath("//input[@id='firstName']/parent::div/following-sibling::p[1]")).getText();
            assert.strictEqual(errorFirstName, elementInArray.firstNameMsg);
        });
    })
    
    testsMail.forEach((elementInArray) => {
        it(elementInArray.title, async () => {
            await driver.findElement(By.xpath("//input[@id='email']")).sendKeys(elementInArray.emailValue);
            await driver.findElement(By.xpath("//button[@type='submit']")).click();
            const errorEmail = await driver.findElement(By.xpath("//input[@id='email']/parent::div/following-sibling::p[1]")).getText();
            assert.strictEqual(errorEmail, elementInArray.emailMsg);
        });
    })
})