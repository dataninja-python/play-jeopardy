import $ = require("jquery");

/**
 * GLOBAL VARIABLES 
 */
// number of questions
const numOfQuestions = 1;
// the base api less the number of questions
const apiURL = "https://jservice.io/api/random?count="
const questionKey = "question";
// const answerKey = "answer";
// const moneyKey = "money";


// used to determine how many of 20 questions remain
let click = 20;
let currentQuestion: string;
let currentAnswer: string;
let currentMoney: number;


/**
 * reduce the number of trivia questions available
 */
function decrementClick() {
  click--;
}

function playGame(question: string, answer: string, money: number) {
  // play game
  console.log(question);
  console.log(answer);
  console.log(money);
  
}

/**
 * retrieves question, answer, and monetary question value from api
 */
function getData() {
  let fullURL = apiURL + numOfQuestions;
  // console.log(fullURL);
  $.ajax({
    url: fullURL,
  }).then(
    /**
     * calls data from api and stores it in local storage
     * @param clues 
     */
    function (clues) {
      // console.log(clues[0].question);
      // console.log(clues[0].answer);
      // console.log(clues[0].value);
      // console.log(typeof clues[0].value);
      playGame(clues[0].question, clues[0].answer, clues[0].value);
    },
    /**
     * 
     * @param error 
     */
    function (error) {
      console.log(error);
    }
  );
}


$("#clue").on("click", function (event) {
  // event.preventDefault();
  console.log(click);
  $("#count").html(`${click} of 20 clues left`);
  decrementClick();
  getData();
});