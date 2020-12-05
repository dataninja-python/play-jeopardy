// "use strict";
// exports.__esModule = true;
// var $ = require("jquery");
/**
 * This app allows a user to play jeopardy
 * This was more challenging than I originally thought. Then, again I have little experience
 * estimating the difficulty of projects like this. As always data related issues took up 80%
 * of my time.
 * sources: https://www.w3schools.com/js/js_json_intro.asp;
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
var categoriesObj = {};
var categoriesArr = [];
var theJSON;
var theText;
var theObj = {
    ids: [],
    titles: [],
    numOfQuestions: []
};
var theName = "jeopardyCategories";
var category;
var ids;
var titles;
var counts;
/**
 * converts from JSON and stores category data as an array of js object
 * @param category
 */
// function storeCategories(category) {
// }
$(function () {
    // simple test to make sure load function works
    // let message: string = "hi";
    // console.log(message);
    /**
     * ajax call
     */
    const idArr = [];
    $.ajax({
        // limit the number of returned items to 42 to allow me to randomly select 3 easily
        url: "https://jservice.io/api/categories?count=" + numOfCategories
    }).then(
    /**
     * pull the jeopardy category information from the database
     * @param categories
     */
    function (categories) {
        // console.log(categories);
        // after several hours failing to access my data it hit me that the api is sending JSON
        // that must be converted...thanks for the heads up everyone
        for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
            category = categories_1[_i];
            // console.log(category.id);
            idArr.push(category.id);
            theObj.ids = idArr;
        }
    }, 
    /**
     * throw an error if there is a problem
     * @param error
     */
    function (error) {
        console.log(error);
    });
    console.log(theObj.ids[0]);
});
