const internetData = require("./internet/internet-data")
const internetDataOne = internetData.internet1.pages
const internetDataTwo = internetData.internet2.pages

let success = []
let skipped = []
let error = []

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

const crawler = function (data) {
    let urls = validUrls(data)

    for (let i = 0; i < data.length; i++) {
        success.push(data[i].address)
        let links = data[i].links
        for (let j = 0; j < links.length; j++) {
            // console.log(links)
            if (success.includes(links[j])) {
                skipped.push(links[j])
                // console.log(links[j])
            } 
            if (!urls.includes(links[j]) ){  // && !errror.includes(links[j]) -> duplicate error for page 1
                error.push(links[j])
                // console.log(error)
            }
        }
    }
    console.log(`Success: ${success}`)
    console.log(`Skipped: ${skipped}`)
    console.log(`Error: ${error}`)
    return data
    // return[success, skipped, error]
    // return Math.PI
}

// validUrls(internetDataOne)
// crawler(internetDataOne)
crawler(internetDataTwo)

// // console.log (validUrls(internetDataOne))
// // let urls = validUrls(internetDataOne)
// // console.log(urls)

// for (let i = 0; i < internetDataOne.length; i++) {
//     // console.log(internetDataOne[i].address)
//     // console.log(urls)
//     success.push(internetDataOne[i].address)
//     // for (let i = 0; i < internetDataOne[i].links.length; i++) {
//         // console.log(internetDataOne[i])
//         let links = internetDataOne[i].links
//         for (let j = 0; j < links.length; j++) {
//             // console.log(links)
//             if (success.includes(links[j])) {
//                 skipped.push(links[j])
//                 // console.log(links[j])
//             } 
//             if (!urls.includes(links[j])){
//                 error.push(links[j])
//                 // console.log(error)
//             }
//         }
//         if (!urls.includes(internetDataOne[i].address)){
//             error.push(internetDataOne[i].address)
//             console.log(error)
//         }
//         // for (let k = 0; k < links.length; k++) {
//         //     console.log(success.includes(links[k]))
//         //     if (!success.includes(links[k])) {
//         //         error.push(links[k])
//         //         // console.log(links[j])
//         //     } 
//         //     console.log(error)
//         // }

//         // internetDataOne[i].links.forEach(function(link){
//         //     links.push(link)
//         // })
//         // console.log(links)
//         // if (success.includes()) {
//         //     skipped.push(internetDataOne[i].links[i])
//         // }
//     }
// // }

// console.log(success)
// console.log(skipped)
// console.log(error)
