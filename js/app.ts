import {
  POINT_CONVERSION_COMPRESSED
} from "constants";
import $ = require("jquery");

/**
 * GLOBAL VARIABLES 
 */
// number of initial questions to pull; trying 20;
const numOfQuestions = 20;
// the base api less the number of questions
const apiURL = "https://jservice.io/api/random?count="
const questionKey = "question";

// used to determine how many of 20 questions remain
let click = 0;
// used to keep track of players earnings
let userMoney = 0;
// used to track game state
let isActive = false;

let currentQuestion = "";
let currentAnswer = "";
let currentMoney = 0;

let gameObj = {
  questions: [],
  answers: [],
  values: [],
  cumUserMoney: 0,
};

let pregame = `<I>Hit the "RULES" button to learn how to play. <br>Or, hit "PLAY" to play 20 Jeopardy questions trivia.</I>`;

/**
 * quit primary game loop
 */
function quit() {
  isActive = false;
  // $("#question-insertion").html("");
}

/**
 * timer delay
 */
function delay() {
  console.log("working!!!");
}


/**
 * reduce questions by 1
 */
function incrementClick() {
  click++;
}

/**
 * clears all DOM inserted things on TV
 */
function clearAll() {
  $("#question-insertion").html("");
  $("#value-insertion").html("");
  $("#result-insertion").html("");
  $("#answer-insertion").html("");
  $("#setup-insertion").html("");
}

/**
 * clear things on TV except setup
 */
function clearScreen() {
  $("#question-insertion").html("");
  $("#value-insertion").html("");
  $("#result-insertion").html("");
  $("#answer-insertion").html("");
}

/**
 * clear answer
 */
function clearAnswerBox() {
  $("#answer-box").val("");
}

/**
 * play jeopardy
 */
function playJeopardy() {
  // get 20 questions
  // present the first question at index 0 the first time
  // every time after the first time present the next question based on the previously incremented click
  // as long as clicks < length of the questions array keep playing
  // allow player to quit at any time by hitting the quit button = reload page
}

/**
 * set game up
 */
function setUp() {
  //-----------------------------------------
  // set all variables back to default
  //-----------------------------------------
  isActive = true;
  // let click = 20;
  // let userMoney = 0;

}

$(() => {
  //-----------------------------------------
  // insert mini-instructions
  //-----------------------------------------
  $("#setup-insertion").html(pregame);

  //-----------------------------------------
  // allow user to play the game
  //-----------------------------------------
  $("#play").on("click",
    function (event) {
      event.preventDefault();
      if (click === 0) {
        clearAll();
      }
      console.log("hi!");
    });

});




//-----------------------------------------
// code snippets for later use
//-----------------------------------------
// $("#question-insertion").html("this is a semi-long question to test what will happen when we do this!");
// $("#value-insertion").html("200");
// $("#result-insertion").html("wrong");
// $("#answer-insertion").html("The answer was chamber");

// let $playGame = $("#play")
// $playGame.on("click", function (event) {
//   event.preventDefault();
//-----------------------------------------
// set up the game to play
//-----------------------------------------
// setUp();
//   playJeopardy()
// });