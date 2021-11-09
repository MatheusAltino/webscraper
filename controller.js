const express = require('express')
const server = require('./server')
const router = require('./router')
const axios = require("axios")
const cheerio = require("cheerio")
const fs = require("fs")

const url = "https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops";

module.exports = async function getNotbooks() {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const list = [];

    //Seach in DOM
    $(".thumbnail div").each((i, elem) => {
        //const image = $(elem).find(".img-responsive img")
        const title = $(elem).find(".title").text().trim().replace("\n", "")
        const description = $(elem).find(".description").text().trim().replace("\n", "")
        const price = $(elem).find(".caption h4").prev("h4").text().trim().replace("\n", "")

        obj = { title, description, price }
        list.push(obj)
    });
    
    //filter by title
    const filterTitle = list.filter(p => p.title.includes("Lenovo"))

    //filter by description
    const filterDescription = filterTitle.filter(p => p.description.includes("Lenovo"))

    
    //writing in a json file
    const updateData = JSON.stringify(filterDescription, null, 2)
    fs.writeFileSync('./response.json', updateData, 'utf-8')

    console.log(filterDescription)
}();
