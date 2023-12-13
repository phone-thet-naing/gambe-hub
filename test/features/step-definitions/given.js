import { Given } from "@wdio/cucumber-framework";

Given("I am on gamehub page", async () => {
    await browser.url("http://localhost:5173/");
    await browser.pause(3000);
})