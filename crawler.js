'use strict'

// const internetData = require("./internet/internet-data")
// const internetDataOne = internetData.internet1.pages
// const internetDataTwo = internetData.internet2.pages

// Function to check for valid emails
// This function iterates through all the addresses in the internet data and pushes them to an array called urls
const validUrls = function (data) {
    let urls = []
    for (let i = 0; i < data.length; i++) {
        urls.push(data[i].address)
    }
    return urls
}

// Function to 'crawl' through websites
const crawler = function (data) {
    // urls is found using validUrls function
    let urls = validUrls(data)
    let success = []
    let skipped = []
    let error = []

    // pushes first address to success
    success.push(data[0].address)

    for (let i = 0; i < data.length; i++) {
        // set links equal to that iterations links, will reset for each address it goes through, for simplicity
        let links = data[i].links
        // iterates through links
        for (let j = 0; j < links.length; j++) {
            // if link is included in success array already, it is then pushed to skipped array
            if (success.includes(links[j]) && !skipped.includes(links[j])) {
                skipped.push(links[j])
            }
            // if link is not in success and is in urls, it is then pushed to success.
            else if (!success.includes(links[j]) && urls.includes(links[j])) {
                success.push(links[j])
            }
            // if link is not included in urls, it is pushed to error array
            else if (!urls.includes(links[j]) && !error.includes(links[j])){  
                error.push(links[j])
            }
        }
    }
    // add success, skipped, and error to results object
    let results = {
        success,
        skipped,
        error
    }
    // return results object
    // console.log(results)
    return results
}

// crawler(internetDataOne)
// crawler(internetDataTwo)

module.exports = {
    crawler
}