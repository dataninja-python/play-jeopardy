"use strict";
exports.__esModule = true;
var $ = require("jquery");
/**
 * This app allows a user to play jeopardy
 */
var numOfCategories = 42;
var finalCategories = 3;
var clueIDs = [];
var clueTitles = [];
var numberOfClues = [];
var clues = [];
/**
 * returns a random list of jeopardy clue categories from an array of objects
 * @param an array
 * @returns a new array
 */
// function getClues(data) { 
//   clues.push(data);
// }
$(function () {
    // let message: string | null = "Hello world";
    // console.log(message);
    $.ajax({
        url: "https://jservice.io/api/categories?count=" + numOfCategories
    }).then(function (data) {
        console.log(data);
        //   getClues(data);
        // });
        // console.log(clues);
    });
});
