const axios = require("axios");
const cheerio = require("cheerio");
const { prop } = require("cheerio/lib/api/attributes");
const { fstat } = require("fs");

const url = "https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops";

async function getNotbooks() {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const list = [];
    $(".thumbnail div").each((i, elem) => {
        const description = $(elem).find(".description").text().replace("\n", "");
        const title = $(elem).find(".title").text().replace("\n", "");
        const price = $(elem).find(".price h4").text().replace("\n", "");
        const rating = $(elem).find(".ratings p").text().replace("\n", "");

            obj = { description, title, price, rating };
            list.push(obj);
    });
    console.log(list);
}

getNotbooks();