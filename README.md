# Project: Web Crawler
For the purposes of this project, we define the Internet as the test data in this document, and a web crawler as software that requests pages from the Internet, parses the content to extract all the links in the page, and visits the links to crawl those pages, to an infinite depth.

## Test Data
Data is in the internet folder in internet-data.js. There are two test cases for the internet in JSON. 

## Assumptions / Design Choices
This crawler was designed solely for the test data. I designed the crawler to iterate through each element in JSON object, and as it was iterating though each element it iterated through that elements links. This was done using 2 for loops. Links were then passed to the success, skipped, or error arrays based on which conditions they met. The success, skipped, and error arrays where then grouped into a results object and returned. 

## Testing
I used Mocha and Chai for testing. I created 6 tests:
- to check if an object was returned
- to check if an array was returned for success
- to check if an array was returned for skipped
- to check if the length of skipped array was 1 for case 2
- to check if the length of error array was 2 for case 1
- to check if the length of error array was 0 for case 2