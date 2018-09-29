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

const validUrls = function (data) {
    let urls = []
    for (let i = 0; i < data.length; i++) {
        urls.push(data[i].address)
    }
    return urls
}
// console.log (validUrls(internetDataOne))
let urls = validUrls(internetDataOne)
// console.log(urls)

for (let i = 0; i < internetDataOne.length; i++) {
    // console.log(internetDataOne[i].address)
    // console.log(urls)
    pages.push(internetDataOne[i].address)
    // for (let i = 0; i < internetDataOne[i].links.length; i++) {
        // console.log(internetDataOne[i])
        let links = internetDataOne[i].links
        for (let j = 0; j < links.length; j++) {
            // console.log(links)
            if (pages.includes(links[j])) {
                duplicates.push(links[j])
                // console.log(links[j])
            } 
            if (!urls.includes(links[j])){
                invalid.push(links[j])
                // console.log(invalid)
            }
        }
        if (!urls.includes(internetDataOne[i].address)){
            invalid.push(internetDataOne[i].address)
            console.log(invalid)
        }
        // for (let k = 0; k < links.length; k++) {
        //     console.log(pages.includes(links[k]))
        //     if (!pages.includes(links[k])) {
        //         invalid.push(links[k])
        //         // console.log(links[j])
        //     } 
        //     console.log(invalid)
        // }

        // internetDataOne[i].links.forEach(function(link){
        //     links.push(link)
        // })
        // console.log(links)
        // if (pages.includes()) {
        //     duplicates.push(internetDataOne[i].links[i])
        // }
    }
// }

console.log(pages)
console.log(duplicates)
console.log(invalid)
