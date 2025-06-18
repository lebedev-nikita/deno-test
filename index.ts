// import delay from "npm:delay:6.0.0";
import puppeteer from "npm:puppeteer";

// @ts-types='npm:@types/jsdom'
import { JSDOM } from "npm:jsdom";

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto("https://google.com");

const html = await page.evaluate(() => document.documentElement.outerHTML);
await browser.close();

const doc = new JSDOM(html).window.document;

for (const elem of doc.head.querySelectorAll("meta")) {
  console.log(elem.outerHTML);
}
