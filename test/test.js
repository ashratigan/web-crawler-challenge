'use strict'

const expect = require('chai').expect
const assert = require('chai').assert;

// require data
const internetData = require("../internet/internet-data")
const internetDataOne = internetData.internet1.pages
const internetDataTwo = internetData.internet2.pages

// require crawler 
const webCrawler = require('../crawler')

describe('Web crawler', function() {
    it('should return an object', function () {
      let result = webCrawler.crawler(internetDataOne)
      assert.typeOf(result, 'object')
    })
    it('skipped array should return an array', function () {
      let result = webCrawler.crawler(internetDataOne)
      let skipped = Object.values(result)[1]
      assert.typeOf(skipped, 'array')
    })
    it('skipped array in case 2 should return length of 1 because there was one skipped link', function () {
      let result = webCrawler.crawler(internetDataTwo)
      let skipped = Object.values(result)[1]
      assert.lengthOf(skipped, 1)
    })
    it('errors array in case 1 should return length of 2 because there were 2 errors for case 1', function () {
      let result = webCrawler.crawler(internetDataOne)
      let error = Object.values(result)[2]
      assert.lengthOf(error, 2)
    })
    it('errors array in case 2 should return length of 0 because there were no errors for case 2', function () {
      let result = webCrawler.crawler(internetDataTwo)
      let error = Object.values(result)[2]
      assert.lengthOf(error, 0)
    })
})
