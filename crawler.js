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
    // success is found using validUrls function
    let success = validUrls(data)
    let skipped = []
    let error = []

    // iterate through each address
    for (let i = 0; i < data.length; i++) {
        // set links equal to that iterations links, will reset for each address it goes through
        let links = data[i].links
        // iterates through links
        for (let j = 0; j < links.length; j++) {
            // if link is included in success array  already, it is then pushed to skipped array
            if (success.includes(links[j])) {
                skipped.push(links[j])
            } 
            // if link is not included in urls, it is pushed to error array
            if (!success.includes(links[j]) ){  // && !errror.includes(links[j]) -> duplicate error for page 1
                error.push(links[j])
            }
        }
    }
    console.log(`Success: ${success}`)
    console.log(`Skipped: ${skipped}`)
    console.log(`Error: ${error}`)
    console.log("==================================")
    return data
    // return[success, skipped, error]
    // return Math.PI

    // need to reset to empy arrays for next time function is called
    skipped = []
    success = []
    error = []
}

crawler(internetDataOne)
crawler(internetDataTwo)
