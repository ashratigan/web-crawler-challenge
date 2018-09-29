const internetData = require("./internet/internet-data")
const internetDataOne = internetData.internet1.pages
const internetDataTwo = internetData.internet2.pages

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
    // urls is the same as success
    let urls = validUrls(data)
    let success = []
    let skipped = []
    let error = []

    // iterate through each address
    for (let i = 0; i < data.length; i++) {
        // push address to success
        // actual unneccessary can just url urls instead for success
        success.push(data[i].address)
        // set links equal to that iterations links, will reset for each address it goes through
        let links = data[i].links
        // iterates through links
        for (let j = 0; j < links.length; j++) {
            // if link is included in success array already, it is then pushed to skipped array
            if (success.includes(links[j])) {
                skipped.push(links[j])
            } 
            // if link is not included in urls, it is pushed to error array
            if (!urls.includes(links[j]) && !error.includes(links[j])){  // && !errror.includes(links[j]) -> duplicate error for page 1
                error.push(links[j])
            }
        }
    }
    console.log(`Success: ${urls}`)
    console.log(`Success: ${success}`)
    console.log(`Skipped: ${skipped}`)
    console.log(`Error: ${error}`)
    return data
    // return[success, skipped, error]
    // return Math.PI
    success = []
    skipped = []
    error = []
}

crawler(internetDataOne)
crawler(internetDataTwo)

// To Do
// Figure out why return isn't working....????
// write tests?!
// check for and remove duplicates 
// for internetDataTwo -> page 6 should not be there!!! -> no previous urls point to it
