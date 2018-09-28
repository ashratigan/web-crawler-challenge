const internetData = require("./internet/internet-data")
const internetDataOne = internetData.internet1.pages
const internetDataTwo = internetData.internet2.pages

let pages = []
let duplicates = []
let invalid = []

// returns all the data for first page in object
// console.log(internetDataOne[0])
// returns length of internetDataOne
// console.log(internetDataOne.length)

// returns address of first page in object
// console.log(internetDataOne[0].address)

// returns links of first page as an array 
// console.log(internetDataOne[0].links)

// returns first link in array
// console.log(internetDataOne[0].links.length)



for (let i = 0; i < internetDataOne.length; i++) {
    pages.push(internetDataOne[i].address)
    // for (let i = 0; i < internetDataOne[i].links.length; i++) {
        // console.log(internetDataOne[i])
        let links = []
        internetDataOne[i].links.forEach(function(link){
            links.push(link)
        })
        console.log(links)
        // if (pages.includes()) {
        //     duplicates.push(internetDataOne[i].links[i])
        // }
    // }
}

// console.log(pages)
// console.log(duplicates)