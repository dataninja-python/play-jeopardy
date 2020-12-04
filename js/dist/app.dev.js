"use strict";

// "use strict";
// exports.__esModule = true;
// var $ = require("jquery");
// const { appendFile } = require("fs/promises");

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
  }).then(function (categories) {
    console.log(categories);
    categories.forEach(function (category) {
      console.log(category); // capture the titles and id for each category
      // use category to display in game header columns
      // use id to get the clues from the api
    }); //   getClues(data);
    // });
    // console.log(clues);
  } // error handler 
  );
});