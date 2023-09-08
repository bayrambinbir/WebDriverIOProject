const LoginPage1 = require("../pageobjects/login.page1");

describe("Demo Login Test", function () {
  it("My First Test", async () => {
    browser.url("https://the-internet.herokuapp.com/login");

    await LoginPage1.loging("tomsmith", "SuperSecretPassword!");
    await LoginPage1.checkMessage("You logged into a secure area!");
  });
});
