import {
  now
} from "jquery";
import $ = require("jquery");

/**
 * This app allows a user to play jeopardy
 */

/**
 * MASTER PSEUDOCODE:
 * 
 * MVP: app that allows a user to play a round of jeopardy with 3 categories and 5 questions and answers per clue
 * 1. get a number of different jeopardy categories
 * 2. narrow it down to 3 categories that have at least 5 questions
 * 
 */


/**
 * gets jeopardy categories
 */
function getCategories() {
  $.ajax({
    // limit the number of returned items to 42 to allow me to randomly select 3 easily
    url: `https://jservice.io/api/categories?count=${numOfCategories}`,
  }).then(
    /**
     * pull the jeopardy category information from the database
     * @param categories 
     */
    function (categories) {
      categories.forEach((category) => {
        // push the id, title, and category
        clueIDs.push(category.id);
        clueTitles.push(category.title);
        clueNum.push(category.clues_count);
        // console.log(category);

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

/**
 * get categories to use in the game
 */
function selectCategories() {
  for (let i = 0; i < finalNumOfCategories; i++) {
    finalIDs.push(Math.floor(Math.random() * numOfCategories));
  }
}


/**
 * gets clues for categories
 */
function getClues(theID) {
  $.ajax({
    // limit the number of returned items to 42 to allow me to randomly select 3 easily
    url: `https://jservice.io/api/clues?category=${theID}`,
  }).then(
    /**
     * pull the jeopardy clues from the database
     * @param categories 
     */
    function (clues) {
      clues.forEach((clue) => {
        console.log(clue);
        allClues.push(clue);

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

/**
 * if id doesn't have a question do something...
 */
function rickRoll() {
  console.log("hi");

}

// for now, hardcoded clues
let finalIDs = [
  11531,
  11496,
  11521,
]

let finalTitles = [
  "mixed bag",
  '"hot" stufff',
  "acting families",
]

let finalNumOfClues = [
  5,
  5,
  5
]

let numOfCategories = 9;
let finalNumOfCategories = 3;
let clueIDs = [];
let clueTitles = [];
let clueNum = [];
// let finalIDs = [];
// let finalTitles = [];
// let finalQuestions = [];
// let finalAnswers = [];
// let finalValues = [];

let cluesNum1 = [];
let cluesNum2 = [];
let cluesNum3 = [];
let allClues = [];
let questions = [];
let answers = [];
// a class to store all the relevant jeopardy infomation for a category
class Category {
  id: number;
  title: string;
  totalClues: number;
}


$((): void => {
  // initial test that typescript is compiling properly
  // let message: string | null = "Hello world";
  // console.log(message);

  // get initial categories from the database
  getCategories();
  // console.log(clueIDs);
  // console.log(clueTitles);
  // console.log(clueNum);
  // test getting all data for final clue
  let test = finalIDs[0];
  getClues(test);
  test = finalIDs[1];
  getClues(test);
  test = finalIDs[2];
  getClues(test);

  // store the clues in separate categories
  for (let i = 0; i < allClues.length; i++) {
    if (i < 5) {
      cluesNum1.push(allClues[i]);
     }
  }
  console.log(cluesNum1);
  
});