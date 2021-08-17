const { expect } = require("chai");
const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { Builder, By, Key, until, sleep } = require("selenium-webdriver");
const { delay } = require("../utils/delay");

Given ("Test registration functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/register/");
  await driver.findElement(By.id("firstname")).sendKeys("test");
  await driver.findElement(By.id("lastname")).sendKeys("test");
  await driver.findElement(By.id("gender")).sendKeys("test");
  await driver.findElement(By.id("Dob")).sendKeys("9-28-2021");
  await driver.findElement(By.id("address")).sendKeys("test");
  await driver.findElement(By.id("phone")).sendKeys("989865865");
  await driver.findElement(By.id("ins")).sendKeys("test");
  await driver.findElement(By.id("email")).sendKeys("test1@gmail.com");
  await driver.findElement(By.id("password")).sendKeys("test1234");
  
  await driver.sleep(delay);
  await driver.findElement(By.id("signup")).click();

  await driver.wait(until.elementLocated(By.id("loginForm")), 30000);
  expect(await driver.wait(until.elementLocated(By.id("loginForm"))));
  // await driver.quit();
});
// Given("Test login functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:3000/");
//   await driver.findElement(By.id("email")).sendKeys("test@gmail.com");
//   await driver.findElement(By.id("password")).sendKeys("test1234");
//   await driver.sleep(delay);
//   await driver.findElement(By.id("loginBtn")).click();

//   await driver.wait(until.elementLocated(By.id("registerForm")), 30000);
//   expect(await driver.wait(until.elementLocated(By.id("registerForm"))));
//   // await driver.quit();
// });

//upload content
Given ("Test UploadContent functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/UploadContent/");
  await driver.findElement(By.id("heading")).sendKeys("test");
  await driver.findElement(By.id("video")).sendKeys("test");
  await driver.findElement(By.id("content_description")).sendKeys("test");
  await driver.findElement(By.id("categories")).sendKeys("9-28-2021");
  await driver.findElement(By.id("price")).sendKeys("test");
 
  
  await driver.sleep(delay);
  await driver.findElement(By.id("Upload")).click();

  await driver.wait(until.elementLocated(By.id("My Profile")), 30000);
  expect(await driver.wait(until.elementLocated(By.id("My Profile"))));
  // await driver.quit();
});