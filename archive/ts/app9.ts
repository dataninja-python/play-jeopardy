import {
  POINT_CONVERSION_COMPRESSED
} from "constants";
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
// used to keep track of players earnings
let userMoney = 0;
// used to track game state
let isActive = true;

let currentQuestion: string;
let currentAnswer: string;
let currentMoney: number;


/**
 * reduce the number of trivia questions available
 */
function decrementClick() {
  click--;
}

/**
 * checks if user's answer is correct
 * @param correctAnswer 
 * @param userAnswer 
 */
function isAnswerCorrect(correctAnswer, playerAnswer) {
  let result = false;
  //--------------------------------
  // convert both answers to lower case strings
  //--------------------------------
  let tmpA = currentAnswer.toLowerCase();
  // let tmpU = String(playerAnswer);
  // let tmpP = tmpU.toLowerCase();
  // attempt to allow "fuzzy" answer matching
  if (tmpA === playerAnswer) {
    result = true;
  } else if (tmpA.search(playerAnswer)) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function playGame(question, answer, money) {
  // play game
  let tmpQ = question;
  let tmpA = answer;
  let tmpM = money;
  // console.log(question);
  // console.log(answer);
  // console.log(money);
  // console.log(`this is the tmp question: ${tmpQ}`);
  // console.log(`this is the tmp answer: ${tmpA}`);
  // console.log(`this is the tmp money: ${tmpM}`);

  //--------------------------------
  // insert question, and value
  //--------------------------------
  $("#question-insertion").html(question);
  $("#value-header").html("Value:");
  $("#value-insertion").html(String(money));
  $("#Result-header").html("Result:");

  //--------------------------------
  // switch from on form submit to this in an attempt
  // to fix the answer always saying true bug
  //--------------------------------
  $("#answer-submit").on("click", function (event) {
    //--------------------------------
    // had to reinsert this line to stop rapid refresh
    //--------------------------------
    event.preventDefault();

    //--------------------------------
    // attempting to get user answer from the inputbox
    // using vanilla javascript and it works
    //--------------------------------
    // let userAnswer = document.getElementById("answer-box").value;
    // console.log(`this is the user's answer: ${userAnswer}`);
    // console.log(typeof userAnswer);

    //--------------------------------
    // now attempting with jquery
    // it finally works
    //--------------------------------
    let user = $("#answer-box").val();
    console.log(`this is the user's answer: ${user}`);
    console.log(typeof user);

    /**
     * clears the answer box for the next question
     */
    function clearAnswerBox() {
      $("#answer-box").val("");
    }

    //--------------------------------
    // alert user again false answer
    //--------------------------------
    if (user = "") {
      alert("Please enter an answer");
      user = $("#answer-box").val();
    }

    //--------------------------------
    // see if the user's answer is absolutely accurate
    //--------------------------------
    // let tmpBool = isAnswerCorrect(tmpA, userAnswer);
    // console.log(`your answer is correct: ${tmpBool}`);

    // if is right answer add money, else subtract it
    // if (answer.toLowerCase() == userAnswer.toLowerCase() || answer.toLowerCase().search(userAnswer.toLowerCase())) {
    //   // if true add money
    //   // console.log(true);
    //   let tmpVal = parseInt($("#value-insertion").html());
    //   console.log(tmpVal);
    //   $("#Result-insertion").html("Right Answer!");
    //   userMoney += tmpVal;
    //   $("#answer-box").html("");
    // } else {
    //   // if false subtract money
    //   console.log(false);
    //   let tmpVal = parseInt($("#value-insertion").html());
    //   console.log(tmpVal);
    //   $("#Result-insertion").html("Sorry, Wrong Answer!");
    //   userMoney -= tmpVal;
    //   $("#answer-box").html("");
    // }
  });
  console.log(userMoney);
  $("#score-insertion").html(String(userMoney));
}

/**
 * retrieves question, answer, and monetary question value from api
 */
// exports.__esModule = true;
// var $ = require("jquery");
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
  event.preventDefault();
  // console.log(click);
  // wrap this entire thing in the if else around play game and reload page when get to zero
  if (click > 0) {
    $("#count").html(`${click} of 20 clues left`);
    decrementClick();
    getData();
  } else {
    console.log("game over");
    location.reload();
  }
});