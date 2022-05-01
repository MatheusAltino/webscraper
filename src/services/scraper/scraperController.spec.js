const {getNotebooks} = require('./scraperController')

describe('Scraper Tests', () => {
    it('Should Data has load', async () => {
        const data = await getNotebooks();        
    expect(data).toEqual(200)
    })/*
    it('Should obj has completed', () => {

    expect()
    })
    it('Should filterTitle', () => {

    expect()
    })
    it('Should filterDescription', () => {

    expect()
    })*/
})