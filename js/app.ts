import $ = require("jquery");

/**
 * GLOBAL VARIABLES 
 */
const numOfCategories = 1;
// let allCatObj = {
//   id: [],
//   title: [],
//   clues: []
// }
let categoriesObj = {};
let categoriesArr = [];
let theJSON;
let theText;
let theObj = {
  ids: [],
  titles: [],
  numOfQuestions: [],
};
let theName = "jeopardyCategories";
let category;
let ids;
let titles;
let counts;

// used in function to only call while still have questions available
let click = 20;
let userScore = 0;
let currentQuestion;
let currentAnswer;
let currentScore;
let playGame = true;
let userIsRight = false;
let userAnswer;
/**
 * converts from JSON and stores category data as an array of js object
 * @param category 
 */
// function storeCategories(category) {

// }

/**
 * sets game state = is the game active or not
 */
function isActiveGame() {
  if (click > 0) {
    playGame = true;
  } else {
    playGame = false;
  }
  click--;
}

/**
 * checks if user's answer is correct
 * @param correctAnswer 
 * @param userAnswer 
 */
function isAnswerCorrect(correctAnswer, userAnswer) {
  // attempt to allow a 'fuzzy' match of user to provided answer
  if (correctAnswer === userAnswer || correctAnswer.search(userAnswer)) {
    return true;
  } else {
    return false;
  }
}




$(() => {
  // simple test to make sure load function works
  // let message: string = "hi";
  // console.log(message);
  $("#clue").on("click", function (event) {
    event.preventDefault();
    console.log(click);
    // const $counter = $("<p>");
    // $counter.text(`${click} of clues left`);
    $("#count").html(`${click} of 20 clues left`);
    // let playGame = true;
    // click--;
    isActiveGame();

    if (playGame) {
      /**
       * ajax call
       */
      $.ajax({
        // limit the number of returned items to 42 to allow me to randomly select 3 easily
        // url: `https://jservice.io/api/categories?count=${numOfCategories}`,
        url: `https://jservice.io/api/random?count=${numOfCategories}`,
      }).then(
        /**
         * pull the jeopardy category information from the database
         * @param clues 
         */
        function (clues) {
          // after several hours failing to access my data it hit me that the api is sending JSON
          // that must be converted...thanks for the heads up everyone
          // false...i weas trying to access data outside of scope...my buddy Ben that used to work at Google helped me realize it while I was ranting
          // console.log(clues);
          console.log(clues[0]);
          console.log(clues[0].question);
          console.log(clues[0].answer);
          console.log(clues[0].value);

          currentQuestion = clues[0].question;
          currentAnswer = clues[0].answer;
          currentScore = clues[0].value;
          $("#question").html(currentQuestion);
          $("#money").html(currentScore);

          // on submitting get the user's answer
          $("#answer-btn").on("click", function (event) {
            // get user's answer
            let userInput = $("#answer-box").val();
            console.log(userInput);
            // is the answer correct?
            // console.log(currentAnswer.search(userInput));
            let tmpAns = currentAnswer.toLowerCase();
            let tmpUsr1 = String(userInput);
            let tmpUsr = tmpUsr1.toLowerCase();
            // allows partial or fuzzy matches to still count
            let fuzzyResult = tmpAns.search(tmpUsr);
            if (tmpAns === tmpUsr) {
              userIsRight = true;
            } else if (fuzzyResult >= 0) { 
              userIsRight = true;
            } else {
              userIsRight = false;
            }
            console.log(userIsRight);

            // add scoring
            if (userIsRight) {
              userScore += parseInt(currentScore);
            } else {
              userScore -= parseInt(currentScore);
            }
            console.log(userScore);
            
            // reset answer box value to empty
            // replaced code here with direct html code
          })
        },
        /**
         * throw an error if there is a problem
         * @param error 
         */
        function (error) {
          console.log(error);
        });
    } else {
      // game  is over
      // display end of game
      // display score
      // refresh browser in 3 seconds
      location.reload();
    }
  });
});