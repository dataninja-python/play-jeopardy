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
const apiURL = "https://jservice.io/api/random?count=";
// combined api
const fullURL = `${apiURL}${numOfQuestions}`;
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

let pregame = `<I>Hit the "RULES" button to learn how to play. <br>Then, hit "PLAY" setup your game.<br>And, hit the "QUESTION" button to get trivia questions.</I>`;

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
  click = click + 1;
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
 * quit primary game loop
 */
function quit() {
  // set active game to false
  isActive = false;
  click = 0;
  // inform user quitting game
  clearAll();
  $("#setup-insertion").html("Thank for playing. Quitting game");
  // reload
  setTimeout(function () {
    location.reload();
  }, 1000);
}

$("#answer-submit").on("click", function (event) {
  let userAnswer = String($("#answer-box").val());
  let tmp = userAnswer.toLowerCase();
  const finalUserAnswer = tmp;
  tmp = currentAnswer.toLowerCase();
  currentAnswer = tmp;
  // console.log(`this is the user's answer: ${userAnswer}`);
  // console.log(`the answer is: ${a}`);
  let playerIsRight = false;
  if (currentAnswer === finalUserAnswer) {
    playerIsRight = true;
    $("#result-insertion").html("Your answer is: Right!");
    clearAnswerBox();
  } else if (currentAnswer.search(finalUserAnswer) !== -1) {
    playerIsRight = true;
    $("#result-insertion").html("Your answer is: Right!");
  } else {
    playerIsRight = false;
    $("#result-insertion").html("Your answer is: Wrong!");
    $("#answer-insertion").html(`The official answer is: ${currentAnswer}`);
    // clearScreen();
    clearAnswerBox();
  }

  console.log(playerIsRight);
  //-----------------------------------------
  // deal with the money
  //-----------------------------------------
  if (playerIsRight) {
    console.log(gameObj.cumUserMoney);
    gameObj.cumUserMoney = gameObj.cumUserMoney + currentMoney;
  } else { 
    console.log(gameObj.cumUserMoney);
    gameObj.cumUserMoney = gameObj.cumUserMoney - currentMoney;
  }
  userMoney = gameObj.cumUserMoney;
  $("#score-insertion").html(String(gameObj.cumUserMoney));
  // $("#score-insertion").html(String(userMoney));
  // clearScreen();
});

/**
 * display on the screen
 * @param q 
 * @param a 
 * @param v 
 */
function displayToUser(q: string, a: string, v: number) {
  // console.log();
  $("#question-insertion").html(q);
  $("#value-insertion").html(String(v));

  // get user answer
}

/**
 * takes the global gameObj with the data and allows people to get questions
 * @param gameState
 */
function trivia(gameState) {
  // $("#setup-insertion").html("Get a question.");
  // setTimeout(() => {clearAll()}, 2000);
  // console.log(gameState);
  // console.log(gameState);
  let qArr = [];
  let aArr = [];
  let vArr = [];
  for (let index = 0; index < gameState.questions.length; index++) {
    // console.log(gameState.questions[index]);
    qArr[index] = gameState.questions[index];
    aArr[index] = gameState.answers[index];
    vArr[index] = gameState.values[index];
  }

  // console.log(qArr[19]);
  // console.log(aArr[19]);
  // console.log(vArr[19]);
  $("#clue").on("click", function () {
    clearScreen();
    clearAnswerBox();
    if (qArr.length === 0) {
      console.log("quit");
      quit();
    }
    currentQuestion = qArr.shift();
    currentAnswer = aArr.shift();
    currentMoney = vArr.shift();
    // console.log(currentQuestion);
    // console.log(currentAnswer);
    // console.log(currentMoney);
    // console.log(aArr.length);
    displayToUser(currentQuestion, currentAnswer, currentMoney);
  });

}


/**
 * retrieves question, answer, and monetary question value from api
 */
function getData() {
  // confirm function call worked
  // console.log("hi! from setup");
  // console.log(fullURL);
  $.ajax({
    url: fullURL,
  }).then(
    /**
     * calls data from api and stores it in global object
     * @param clues 
     */
    function (clues) {
      // initial data test
      console.log(clues[0].question);
      console.log(clues[0].answer);
      // console.log(clues[0].value);
      // console.log(typeof clues[0].value);

      //-----------------------------------------
      // loop through data
      //-----------------------------------------
      for (let index = 0; index < clues.length; index++) {
        // test with questions
        // console.log(clues[index].question);
        gameObj.questions[index] = clues[index].question;
        gameObj.answers[index] = clues[index].answer;
        gameObj.values[index] = clues[index].value;
      }
      // console.log(gameObj);
      trivia(gameObj);
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

/**
 * set game up
 */
function setUp() {
  // confirm function call worked
  // console.log("hi! from setup");
  //-----------------------------------------
  // set all variables back to default
  //-----------------------------------------
  isActive = true;
  //-----------------------------------------
  // tell user you're getting 20 questions
  //-----------------------------------------
  clearAll();
  $("#setup-insertion").html("Getting your 20 questions...give me a sec");
  setTimeout(() => {
    clearAll();
  }, 1000);
  // grab 20 questions
  getData();
  // insert them into the global object
  // let click = 20;
  // let userMoney = 0;

}


/**
 * play jeopardy
 */
function playJeopardy() {
  // confirm function call worked
  console.log("hi! from playJeopardy");
  //-----------------------------------------
  // inform user you are setting up the game
  //-----------------------------------------
  setUp();
  // get 20 questions
  // confirm data is still available
  // console.log(gameObj);
  // present the first question at index 0 the first time
  // every time after the first time present the next question based on the previously incremented click
  // as long as clicks < length of the questions array keep playing
  // allow player to quit at any time by hitting the quit button = reload page
}

$(() => {

  $('.preload').fadeOut('slow');
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
      // if start of game clear entire screen to start
      if (click === 0) {
        clearAll();
      }
      // start the game by calling the game function
      // console.log("hi! from play button");
      playJeopardy()
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

// if (click < gameState.questions.length) {
//     // display the question of 20
//     $("#clue").on("click", function () {
//         $("#count").html(click + 1 + " of 20 Questions");
//         console.log(click);
//         incrementClick();
//     });
// }
// else if (click === gameState.questions.length) {
//     // quit
//     quit();
// }