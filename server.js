const axios = require("axios");
const cheerio = require("cheerio");
const { prop } = require("cheerio/lib/api/attributes");
const fs = require("fs");
const { get } = require("request");

const url = "https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops";

async function getNotbooks() {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const list = [];
    //Seach in DOM
    $(".thumbnail div").each((i, elem) => {
        const title = $(elem).find(".title").text().trim().replace("\n", "");
        const description = $(elem).find(".description").text().trim().replace("\n", "");
        const price = $(elem).find(".caption h4").text().trim().replace("\n", "");
        obj = { title, description, price };
        list.push(obj);        
    });

    //filter by title
    const filterTitle = list.filter(p => p.title.includes("Lenovo")) 

    console.log(filterTitle)
    
    //writing in a json file
    /*fs.writeFile('resultado.json', JSON.stringify(filterTitle), null, 2), err => {
        if(err) throw new Error('Somenthing went wrong')
        else console.log(filterTitle);
    }
    */
};

getNotbooks();