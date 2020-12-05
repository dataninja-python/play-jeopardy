import $ = require("jquery");

/**
 * This app allows a user to play jeopardy
 */

/**
 * MASTER PSEUDOCODE:
 * 
 * MVP: app that allows a user to play a round of jeopardy with 3 categories and 5 questions and answers per clue
 * 
 */

let numOfCategories = 42;
let finalCategories = 3;
let clueIDs = [];
let clueTitles = [];
let clueNum = [];
// let clues = [];

/**
 * returns a random list of jeopardy clue categories from an array of objects
 * @param an array
 * @returns a new array
 */
// function getClues(data) { 
//   clues.push(data);
// }

$((): void => {
  // let message: string | null = "Hello world";
  // console.log(message);


  $.ajax({
    // limit the number of returned items to 42 to allow me to randomly select 3 easily
    url: `https://jservice.io/api/categories?count=${numOfCategories}`,
  }).then(
    (categories) => {
      // log initial data coming back from api
      // console.log(categories);
      // capture the category data for the categories using forEach
      categories.forEach(function (category) {
            // console.log(category.id);
            // console.log(category.title);
            // console.log(category.clues_count);
            // category id
            clueIDs.push(category.id);
            // category title
            clueTitles.push(category.title);
            // number of questions in the categories
            clueNum.push(category.clues_count);
          }
        },
        (error) => {
          console.log(error);
        }
    );
    // test that data is available outside of ajax request
    console.log(clueIDs); console.log(clueTitles); console.log(clueNum);
  });
});