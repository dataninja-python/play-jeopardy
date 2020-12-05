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
    finalIDs.push(Math.floor(Math.random()* numOfCategories));
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
        // push the id, title, and category
        console.log(clue.question);
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



let numOfCategories = 42;
let finalNumOfCategories = 3;
let clueIDs = [];
let clueTitles = [];
let clueNum = [];
let finalIDs = [];
let finalQuestions = [];
let finalAnswers = [];
let finalValues = [];

$((): void => {
  // initial test that typescript is compiling properly
  // let message: string | null = "Hello world";
  // console.log(message);

  // get initial categories from the database
  getCategories();
  console.log(clueIDs);
  console.log(clueTitles);
  console.log(clueNum);
  // selectCategories();
  // console.log(finalIDs);
  // finalIDs.forEach(getClues);
  // getClues(finalIDs[0]);
});