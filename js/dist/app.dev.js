"use strict";

// "use strict";
// exports.__esModule = true;
// var $ = require("jquery");

/**
 * GLOBAL VARIABLES
 */
var numOfCategories = 1; // let allCatObj = {
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
var counts; // used in function to only call while still have questions available

var click = 20;
/**
 * converts from JSON and stores category data as an array of js object
 * @param category
 */
// function storeCategories(category) {
// }

function isActiveGame() {
  if (click > 0) {
    return true;
  } else {
    return false;
  }
}

$(function () {
  // simple test to make sure load function works
  // let message: string = "hi";
  // console.log(message);
  $("#clue").on("click", function (event) {
    event.preventDefault();
    console.log(click);
    var playGame = isActiveGame;
    click--;
    /**
     * ajax call
     */

    $.ajax({
      // limit the number of returned items to 42 to allow me to randomly select 3 easily
      // url: `https://jservice.io/api/categories?count=${numOfCategories}`,
      url: "https://jservice.io/api/random?count=" + numOfCategories
    }).then(
    /**
     * pull the jeopardy category information from the database
     * @param clues
     */
    function (clues) {
      // console.log(categories);
      // after several hours failing to access my data it hit me that the api is sending JSON
      // that must be converted...thanks for the heads up everyone
      // false...i weas trying to access data outside of scope...my buddy Ben that used to work at Google helped me realize it while I was ranting
      // console.log(clues);
      console.log(clues[0].question);
      console.log(clues[0].answer);
      console.log(clues[0].value); // let count = 0;
      // for (category of categories) {
      //   // console.log(category.id);
      //   theObj.ids[count] = category.id;
      //   count++;
      // }
      // console.log(theObj.ids[0]);
    },
    /**
     * throw an error if there is a problem
     * @param error
     */
    function (error) {
      console.log(error);
    });
  });
});