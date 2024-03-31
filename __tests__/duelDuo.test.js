// this part took me so long i had to come back to it on sunday (3/32/24)
// because i did this over multiple days it ended up being kind of a mess and i tried to clean it up as best as i could. 
// i also got really confused by the Frodo lecture when i went back over it so i followed a different guide
// i would like to go over this again as i was confused the whole time i was dooing it and it felt like i was just following a guide rather than actually undertanding what i was doing. 

const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("Draw button displays 'choices' div", async () => {
    await driver.get("http://localhost:8000");
    const drawButton = await driver.findElement(By.id("draw-button")); 
    await drawButton.click();
    const choicesDiv = await driver.findElement(By.id("choices"));
    const isDisplayed = await choicesDiv.isDisplayed();
    expect(isDisplayed).toBeTruthy();
  });

  test("Clicking 'Add to Duo' button displays 'player-duo' div", async () => {
    await driver.get("http://localhost:8000");
    const addToDuoButton = await driver.findElement(By.css(".add-to-duo-button")); 
    await addToDuoButton.click();
    const playerDuoDiv = await driver.findElement(By.id("player-duo"));
    const isDisplayed = await playerDuoDiv.isDisplayed();
    expect(isDisplayed).toBeTruthy();
  });

  test("Removing a bot from 'Player Duo' moves it back to 'choices'", async () => {
    await driver.get("http://localhost:8000");
    const addToDuoButton = await driver.findElement(By.css(".add-to-duo-button")); 
    await addToDuoButton.click();
    const removeFromDuoButton = await driver.findElement(By.css(".remove-from-duo-button")); 
    await removeFromDuoButton.click();
    const choicesDiv = await driver.findElement(By.id("choices"));
    const botBackInChoices = await choicesDiv.findElement(By.css(".bot")); 
    const isDisplayed = await botBackInChoices.isDisplayed();
    expect(isDisplayed).toBeTruthy();
  });
});
