const { response } = require('express');
const express = require('express');
const puppeteer = require('puppeteer');

const server = express();
const port = 3000;


server.get('/', (req, res) => {
    response.send('Hello world!');
});


server.listen(port, () => {
    console.log(`acesse em htpp://localhost.com:${port}`)
});


;(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops');
  await page.puppeteer({ path: 'example.png' });

  await browser.close();
})();
