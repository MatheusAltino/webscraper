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
        const image = $(elem).find(".img-responsive img")
        const title = $(elem).find(".title").text().trim().replace("\n", "")
        const description = $(elem).find(".description").text().trim().replace("\n", "")
        const price = $(elem).find(".caption h4").prev("h4").text().trim().replace("\n", "")
        
        obj = { image, title, description, price }
        list.push(obj)      
    });

    //filter by title
    const filterTitle = list.filter(p => p.title.includes("Lenovo"))

    //const updateData = fs.writeFile('response.json', JSON.stringify(filterTitle))
    //writing in a json file
    //fs.writeFile('response.json', JSON.stringify(filterTitle))
    console.log(filterTitle)
}();
