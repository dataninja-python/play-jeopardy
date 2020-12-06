// "use strict";
// exports.__esModule = true;
// var $ = require("jquery");
/**
 * GLOBAL VARIABLES
 */
var numOfCategories = 1;
// let allCatObj = {
//   id: [],
//   title: [],
//   clues: []
// }
var categoriesObj = {};
var categoriesArr = [];
var theJSON;
var theText;
var theObj = {
    ids: [],
    titles: [],
    numOfQuestions: []
};
var theName = "jeopardyCategories";
var category;
var ids;
var titles;
var counts;
// used in function to only call while still have questions available
var click = 20;
// let counter = 1;
var userScore = 0;
var currentQuestion;
var currentAnswer;
var currentScore;
var playGame = true;
var userIsRight = false;
var userAnswer;
var userRightAnswers = 0;
var userWrongAnswers = 0;
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
    }
    else {
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
    }
    else {
        return false;
    }
}
$(function () {
    // simple test to make sure load function works
    // let message: string = "hi";
    // console.log(message);
    userRightAnswers = 0;
    userWrongAnswers = 0;
    $("#clue").on("click", function (event) {
        event.preventDefault();
        console.log(click);
        // const $counter = $("<p>");
        // $counter.text(`${click} of clues left`);
        $("#count").html(click + " of 20 clues left");
        // let playGame = true;
        // click--;
        /**
        * checks to make sure the play is active
        */
        isActiveGame();
        if (playGame) {
            /**
             * ajax call
             */
            $.ajax({
                // limit the number of returned items to 42 to allow me to randomly select 3 easily
                // url: `https://jservice.io/api/categories?count=${numOfCategories}`,
                url: "https://jservice.io/api/random?count=" + numOfCategories
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
                    var userInput = $("#answer-box").val();
                    console.log(userInput);
                    // is the answer correct?
                    // console.log(currentAnswer.search(userInput));
                    var tmpAns = currentAnswer.toLowerCase();
                    var tmpUsr1 = String(userInput);
                    var tmpUsr = tmpUsr1.toLowerCase();
                    // allows partial or fuzzy matches to still count
                    var fuzzyResult = tmpAns.search(tmpUsr);
                    if (tmpAns === tmpUsr) {
                        userIsRight = true;
                    }
                    else if (fuzzyResult >= 0) {
                        userIsRight = true;
                    }
                    else {
                        userIsRight = false;
                    }
                    console.log(userIsRight);
                    // add scoring
                    if (userIsRight) {
                        userScore += currentScore;
                        userRightAnswers = userRightAnswers + 1;
                        $("#result").html("correct");
                        $("#answer").html(currentAnswer);
                        $("#table-right").html(String(userRightAnswers));
                        $("#table-win").html(String(userScore));
                    }
                    else {
                        userScore -= currentScore;
                        userWrongAnswers = userWrongAnswers + 1;
                        $("#result").html("incorrect");
                        $("#answer").html(currentAnswer);
                        $("#table-wrong").html(String(userWrongAnswers));
                        $("#table-win").html(String(userScore));
                    }
                    console.log(userScore);
                    $("#answer-box").val("");
                    // reset answer box value to empty
                    // replaced code here with direct html code
                });
            }, 
            /**
             * throw an error if there is a problem
             * @param error
             */
            function (error) {
                console.log(error);
            });
        }
        else {
            // game  is over
            // display end of game
            // display score
            // refresh browser in 3 seconds
            location.reload();
        }
    });
});
