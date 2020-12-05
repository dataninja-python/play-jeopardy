"use strict";
exports.__esModule = true;
var $ = require("jquery");
/**
 * This app allows a user to play jeopardy
 */
/**
 * MASTER PSEUDOCODE:
 *
 * MVP: app that allows a user to play a round of jeopardy with 3 categories and 5 questions and answers per clue
 * 1. pull a number of jeopardy category options
 * 2. narrow the selection down to just datasets with 5 questions
 * 3. remove unclean datasets
 * 4. select the first 3 datasets as categories
 * 5. store the game categories and all relevant information as 3 objects
 * 6. create the 3 category jeopardy front-end
 * 7.
 *
 */
/**
 * GLOBAL VARIABLES
 */
var numOfCategories = 18;
// let allCatObj = {
//   id: [],
//   title: [],
//   clues: []
// }
var categoryResult = [];
function storeCategoryData(category) {
    categoryResult.push(category);
}
$(function () {
    // simple test to make sure load function works
    // let message: string = "hi";
    // console.log(message);
    /**
     * ajax call
     */
    $.ajax({
        // limit the number of returned items to 42 to allow me to randomly select 3 easily
        url: "https://jservice.io/api/categories?count=" + numOfCategories
    }).then(
    /**
     * pull the jeopardy category information from the database
     * @param categories
     */
    function (categories) {
        categories.forEach(storeCategoryData);
    }, 
    /**
     * throw an error if there is a problem
     * @param error
     */
    function (error) {
        console.log(error);
    });
    // let keys = Object.keys(allCatObj);
    // console.log(keys);
    // console.log(allCatObj[keys[0]]);
    console.log(categoryResult);
});
