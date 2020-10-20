require('dotenv').config();
const puppeteer = require('puppeteer');
const password = process.env.PASS;
const email = process.env.EMAIL;

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    let mail = 'input[id="signin_email"]';
    let pass = 'input[id="signin_password"]';
    let money;

    await page.goto('https://app2.bankin.com/signin', { waitUntil: 'networkidle2'});
    await page.waitFor(mail);
    await page.waitFor(pass);
    await page.click(mail);
    await page.$eval(mail, (el,value) => el.value = value, email);
    await page.click(pass);
    await page.$eval(pass, (el, value) => el.value = value, password);
    await page.keyboard.press('Enter');
    
    console.log(page.url());
    await browser.close();
})();