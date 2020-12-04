import * as $ from "jquery";

/**
 * This app allows a user to play jeopardy
 */


let numOfCategories = 42;
let finalCategories = 3;
let clueIDs = [];
let clueTitles = [];
let numberOfClues = [];
let clues = [];

/**
 * returns a random list of jeopardy clue categories from an array of objects
 * @param an array
 * @returns a new array
 */
function getClues(data) { 
  clues.push(data);
}

$(() => {
  // let message: string | null = "Hello world";
  // console.log(message);

  $.ajax({
    url: `https://jservice.io/api/categories?count=${numOfCategories}`,
  }).then((data): void => {
    // console.log(data);
    getClues(data);
  });

  // console.log(clues);
  
})