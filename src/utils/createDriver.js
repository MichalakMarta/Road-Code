// Uruchomienie przeglądarki z opcją wyłączonego logowania błędów
import { Builder } from "selenium-webdriver";
import { Options } from "selenium-webdriver/chrome.js";
const options = new Options();
options.excludeSwitches("enable-logging");

export function createDriver(browserName) {
    const driver = new Builder().forBrowser(browserName).withCapabilities(options).build();
    driver.manage().window().maximize();
    return driver;
}