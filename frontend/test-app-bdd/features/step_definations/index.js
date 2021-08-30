const { expect } = require("chai");
const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { Builder, By, Key, until, sleep } = require("selenium-webdriver");
const { delay } = require("../utils/delay");
const { default: Profile } = require("../../../econtent/src/Profile/Profile");

// Given ("Test registration functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:3000/register/");
//   await driver.findElement(By.id("firstname")).sendKeys("test");
//   await driver.findElement(By.id("lastname")).sendKeys("test");
//   await driver.findElement(By.id("gender")).sendKeys("test");
//   await driver.findElement(By.id("Dob")).sendKeys("9-28-2021");
//   await driver.findElement(By.id("address")).sendKeys("test");
//   await driver.findElement(By.id("phone")).sendKeys("989865865");
//   await driver.findElement(By.id("ins")).sendKeys("test");
//   await driver.findElement(By.id("email")).sendKeys("test1@gmail.com");
//   await driver.findElement(By.id("password")).sendKeys("test1234");
  
//   await driver.sleep(delay);
//   await driver.findElement(By.id("signup")).click();

//   await driver.wait(until.elementLocated(By.id("loginForm")), 30000);
//   expect(await driver.wait(until.elementLocated(By.id("loginForm"))));
//   await driver.quit();
// });

// Given("Test login functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:3000");
//   await driver.findElement(By.id("email")).sendKeys("test@gmail.com");
//   await driver.findElement(By.id("password")).sendKeys("test1234");
//   await driver.sleep(delay);
//   await driver.findElement(By.id("loginbtn")).click();

//   await driver.wait(until.elementLocated(By.id("registerForm")), 30000);
//   expect(await driver.wait(until.elementLocated(By.id("registerForm"))));
//   await driver.quit();
// });
 
// Test UploadContent
Given ("Test UploadContent functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000");
  await driver.findElement(By.id("email")).sendKeys("test@gmail.com");
  await driver.findElement(By.id("password")).sendKeys("test1234");
  await driver.sleep(delay);
  await driver.findElement(By.id("loginbtn")).click();
  await driver.get("http://localhost:3000/UploadContent/");
  await driver.findElement(By.id("heading")).sendKeys("test");
  await driver.findElement(By.id("video")).sendKeys("test");
  await driver.findElement(By.id("content_description")).sendKeys("test");
  await driver.findElement(By.id("categories")).sendKeys("nepali");
  await driver.findElement(By.id("price")).sendKeys("test"); 
 
  await driver.sleep(delay);
  await driver.findElement(By.id("upload")).click();

  // await driver.wait(until.elementLocated(By.id("My Profile")), 30000);
  // expect(await driver.wait(until.elementLocated(By.id("My Profile"))));
  await driver.quit(); 
});

// //Upload content

// Given("Test Upload functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:3000");
//   await driver.findElement(By.id("heading")).sendKeys("uploadcontent");
//   await driver.findElement(By.id("video")).sendKeys("");
//   await driver.findElement(By.id("content_description")).sendKeys("hello");
//   await driver.findElement(By.id("content_description")).sendKeys("nepali");
//   await driver.findElement(By.id("price")).sendKeys("1234");
//   await driver.sleep(delay);
//   await driver.findElement(By.id("UploadContent")).click();

//   // await driver.wait(until.elementLocated(By.id("registerForm")), 30000);
//   // expect(await driver.wait(until.elementLocated(By.id("registerForm"))));
//   await driver.quit();
// });

//Contact US Of The company

Given("Test ContactUs functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000");
  await driver.findElement(By.id("name")).sendKeys("Riya");
  await driver.findElement(By.id("email")).sendKeys("riyapandey@gmail.com");
  await driver.findElement(By.id("phone")).sendKeys("983468736");
  await driver.findElement(By.id("message")).sendKeys("successfully contact");
  
  await driver.sleep(delay);
  await driver.findElement(By.id("submit")).click();

  // await driver.wait(until.elementLocated(By.id("registerForm")), 30000);
  // expect(await driver.wait(until.elementLocated(By.id("registerForm"))));
  await driver.quit();
});

//Profile

Given("Test ContactUs functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000");
  await driver.findElement(By.id("First_name")).sendKeys("Riya");
  await driver.findElement(By.id("Last_name")).sendKeys("Pandey");
  await driver.findElement(By.id("Dob")).sendKeys("8-1-2000");
  await driver.findElement(By.id("gender")).sendKeys("female");
  await driver.findElement(By.id("address")).sendKeys("kathmandu");
  await driver.findElement(By.id("Phone_number")).sendKeys("983663757");
  await driver.findElement(By.id("institution_name")).sendKeys("softwarica college");
  await driver.findElement(By.id("Email")).sendKeys("riya12@gmail.com");
  await driver.findElement(By.id("Profile_Picture")).sendKeys(""); 
  await driver.findElement(By.id("institution_ID")).sendKeys("");
  await driver.findElement(By.id("password")).sendKeys("123456");
  await driver.findElement(By.id("id")).sendKeys("1");

  await driver.sleep(delay);
  await driver.findElement(By.id("update")).click();

  // await driver.wait(until.elementLocated(By.id("registerForm")), 30000);
  // expect(await driver.wait(until.elementLocated(By.id("registerForm"))));
  await driver.quit();
});
