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
// const answerKey = "answer";
// const moneyKey = "money";
// used to determine how many of 20 questions remain
var click = 20;
var currentQuestion;
var currentAnswer;
var currentMoney;
/**
 * reduce the number of trivia questions available
 */
function decrementClick() {
    click--;
}
/**
 * retrieves question, answer, and monetary question value from api
 */
function getData() {
    var fullURL = apiURL + numOfQuestions;
    // console.log(fullURL);
    $.ajax({
        url: fullURL
    }).then(
    /**
     * calls data from api and stores it in local storage
     * @param clues
     */
    function (clues) {
        console.log(clues[0].question);
        console.log(clues[0].answer);
        console.log(clues[0].value);
        console.log(typeof clues[0].value);
    }, 
    /**
     *
     * @param error
     */
    function (error) {
        console.log(error);
    });
}
$("#clue").on("click", function (event) {
    // event.preventDefault();
    console.log(click);
    $("#count").html(click + " of 20 clues left");
    decrementClick();
    getData();
});
