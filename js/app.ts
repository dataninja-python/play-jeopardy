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

// used to determine how many of 20 questions remain
let click = 20;
// used to keep track of players earnings
let userMoney = 0;
// used to track game state
let isActive = false;

let currentQuestion: string;
let currentAnswer: string;
let currentMoney: number;

let pregame = `<br><br>Hit the "RULES" button to learn how to play. <br><br>Or, hit "PLAY" to play 20 question's trivia Jeopardy style.`;

/**
 * quit primary game loop
 */
function quit() {
  isActive = false;
}

/**
 * timer delay
 */
function delay() { 
  setTimeout(function () {console.log("loading!");}, 500);
}

/**
 * play jeopardy
 */
function playJeopardy() {
  while (isActive) {
    $("#question-insertion").html("Loading questions...");
    delay();
    $("#question-insertion").html("Loading questions...");
    quit();
  }
}

/**
 * set game up
 */
function setUp() {
  //-----------------------------------------
  // set all variables back to default
  //-----------------------------------------
  isActive = true;
  let click = 20;
  let userMoney = 0;
  $("#question-insertion").html(pregame);
}

$(() => {
  //-----------------------------------------
  // set up the game to play
  //-----------------------------------------
  setUp();
  let $playGame = $("#play")
  $playGame.on("click", playJeopardy);
});