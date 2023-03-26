// Przykładowy test - przejście na stronę google.com. Aby uruchomić test należy wpisać w terminalu: npm test
// Warunki potrzebne do uruchomienia testu:
import { By, Key } from "selenium-webdriver";
import { describe, it } from "mocha";
import { assert } from "chai";
import "chromedriver";
import { createDriver } from "../utils/createDriver.js";

// Opis zbioru przypadków testowych
describe("Szablon do testów automatycznych", () => {
    let driver;

    // Funkcja, która występuje na początku każdego testu - uruchomienie Chrome
    beforeEach(async () => {
        driver = await createDriver("chrome");
    });

    // Po wykonaniu każdego testu przeglądarka zostanie zamknięta automatycznie
    afterEach(async () => {
        await driver.quit();
    });

    // Każdy test case to osobny it. W zbiorze przypadkó testowych może być wiele it'ów
    it("Test wejścia na stronę google.com", async () => {
        await driver.get("http://www.google.com");
    });
});