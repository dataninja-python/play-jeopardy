// "use strict";
// exports.__esModule = true;
// var $ = require("jquery");
/**
 * GLOBAL VARIABLES
 */
// number of questions
var numOfQuestions = 1;
// the base api less the number of questions
var apiURL = "https://jservice.io/api/random?count=";
var questionKey = "question";
// used to determine how many of 20 questions remain
var click = 20;
// used to keep track of players earnings
var userMoney = 0;
// used to track game state
var isActive = false;
var currentQuestion;
var currentAnswer;
var currentMoney;
var pregame = "<br><br>Hit the \"RULES\" button to learn how to play. <br><br>Or, hit \"PLAY\" to play 20 question's trivia Jeopardy style.";
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
    setTimeout(function () { console.log("loading!"); }, 500);
}
/**
 * play jeopardy
 */
function playJeopardy() {
    while (isActive) {
        $("#question-insertion").html("Loading questions...");
        delay();
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
    var click = 20;
    var userMoney = 0;
    $("#question-insertion").html(pregame);
}
$(function () {
    //-----------------------------------------
    // set up the game to play
    //-----------------------------------------
    setUp();
    var $playGame = $("#play");
    $playGame.on("click", playJeopardy);
});
