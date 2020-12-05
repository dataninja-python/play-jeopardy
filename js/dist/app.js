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
 * 1. get a number of different jeopardy categories
 * 2. narrow it down to 3 categories
 *
 */
/**
 * gets jeopardy categories
 */
function getCategories() {
    $.ajax({
        // limit the number of returned items to 42 to allow me to randomly select 3 easily
        url: "https://jservice.io/api/categories?count=" + numOfCategories
    }).then(
    /**
     * pull the jeopardy category information from the database
     * @param categories
     */
    function (categories) {
        categories.forEach(function (category) {
            // push the id, title, and category
            clueIDs.push(category.id);
            clueTitles.push(category.title);
            clueNum.push(category.clues_count);
        });
    }, 
    /**
     * throw an error if there is a problem
     * @param error
     */
    function (error) {
        console.log(error);
    });
}
function selectCategories() {
    for (var i = 0, i = void 0; ;)
        ;
}
var numOfCategories = 42;
var finalNumOfCategories = 3;
var clueIDs = [];
var clueTitles = [];
var clueNum = [];
var finalIDs = [];
$(function () {
    // initial test that typescript is compiling properly
    // let message: string | null = "Hello world";
    // console.log(message);
    // get initial categories from the database
    getCategories();
    console.log(clueIDs);
    console.log(clueTitles);
    console.log(clueNum);
    selectCategories();
});
