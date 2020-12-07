# Play-Jeopardy MVP

This is a trivia app that allows a user to answer jeopardy questions provided by the https://jservice.io/ api.

# HOW TO PLAY

* click the "NEXT QUESTION" button to start and advance the game
* afterwards, you will be provided with a random jeopardy trivia question
* in the input section where it says "Enter your answer", enter your response as a statement (not a question as Jeopardy actually requires) in lowercase
* IMPORTANT: to submit your response, you must click the submit button...hitting your enter key will not work
* you will then find out if your questions is correct or not
* if correct, you win prize money; else, you lose prize money
* right now, you can only play 1 round which is 20 questions
* so, after clicking and answering the 20th question, the game will reset when the "NEXT QUESTION" button is clicked again
* if at any time you forget any of this the "RULES" button in the upper left corner of the app for a quick refresher

# GIST

This is an MVP of a jeopardy app.

This basic iteration was created in ~5 days. It is intended to improve my comprehension of key programming fundamentals and provide practice creating functional prototypes quickly. HTML, CSS, Typescript, Javascript, and Jquery were used in development. VS Code and neovim were used as code editors.

Special thanks to Leland Shirley, Jerrica Bobadilla, Matt Hunington, and my General Assembly Software Engineering Immersive study group for helping me refine the idea, find a good api, overcome obstacles, and keeping me motivated along what turned out to be a more challening journey than originally expected.

# THE PLAN IN PSEUDOCODE

1. pull a number of jeopardy category options
2. narrow selection down to just datasets with 5 questions
3. remove unclean datasets
4. select the first 3 datasets as categories
5. store the game categories and all relevant information as 3 objects
6. create the jeopardy front-end
7. allow user to click on a dollar amount to get a question
8. user can then answer the question
9. if the user answers correctly, give the money; else subtract the money
10. display an updated score after each question and at end

# DEV PLAN

[x] due to api issues, MVP was simplifid to allow the user to get 1 random question at a time 20 times and tabulate the score
[x] limit user to answer only 20 questions total
[x] allow fuzzy answer matching
[x] enable scoring
[x] display the question
[x] display "right" or "wrong"
[x] display answer
[] display score
[] display rules in modal || have a sticky nav bar

# REQUIRED FEATURES

[x] Use HTML, CSS, JavaScript and JQuery
[] Host on github pages
[x] Commit every day - locally; uploaded periodically
[x] Write a README.md file with explanation of tech, approach, link, installation instructions, unsolved problems, etc
[x] Use AJAX to make a request to an external API and insert some of of the data retrived into the DOM
[] Implement responsive design
[x] Have one or more complex user interface modules such as a carousel, a modal, a stick nav, tootips, etc

# BUGS

[x] fix undefined user answer issue
[x] fix right/wrong answer system
[] add scoring system
[] fix multiple score per answer problem
[] add display score on screen
# POTENTIAL FUTURE FEATURES

[] check that users answer is not blank
[] increase "fuzzy" matching to 80% accuracy
[] add give the correct answer to the question
[] allow a user to skip a question without hurting his/her score
[] learn to use adobe XD, figma or similar tool to improve UX/UI
[] add question categories
[] set up to play more like jeopardy with clicking of multiple squares
[] allow to play a full jeopardy game
[] enable the daily double where you can place a wager of up to all your current money
[] make answers have to be in the form of a question
[] organize questions in increasing difficulty
[] ensure all sources in code are listed here as well
[] make game automatically play from a single function call
[] remove but where person can enter multiple answers to the same question
[] add random responses to right and wrong answers

# ISSUES

_Time Management_
Estimating how long things would take was far more challenging than I anticipated.
Then, again I have little experience estimating the difficulty of projects like this. Data related issues have taken up 80% of time to date.

_Undefined Data_
After losing a day to api related data issues, I was forced to remove the need for repeated calls to the api by saving the needed data.
Frustrated with javascript, I turned to a language better suited for data munging Python. I also considered Go, Rust, and Ruby. But Python solved the problem fastest. NOTE: after taking a break to complain to a buddy with 10 years programming experience at Google, he helped me discover I was trying to log the data outside of the callback scope...rookie move.

_Typescript_
In my quest to have at least a working knowledge of the most popular languages, and because I like the additional features (types, error checking on compilation, backwards compatibility, etc) it adds, I spent a few hours - at least 1 of them with Leland - making so I could use TypeScript. While it adds some overhead and slows my development time slightly, knowing the code I write works as planned is priceless.

_Front-end_
My inadequacies with UX/UI are a major reason for taking this course. I want to push myself to do more than create a functional ugly trivia game. However, it is currently Sunday, 12/6/2020, and the project must be done in 2 days. Thus, I fear I may fail to produce something attractive...again. However, I plan to take at least 1 adobe XD tutorial and use the application to help accelerate my understanding of how to produce better UX/UI.

_Scoring Issues_
To fix an issue with scoring I was forced to refactor my code and put sections into functions. Scoping continued to be a problem which had to be addressed by methodically breaking the code into functions.

_Local Storage_
Unfortunately, I was unable to use localstorage as planned.

# SOURCE LIST

Below is a best effort to assemble a list of resources used in this project; however, some sources may be listed directly in the code where used and others may be mistakenly omitted. Apologies in advance to source unintentionally not listed.

https://www.codegrepper.com/code-examples/javascript/javascript+read+file+lines+into+array+vanilla
https://www.codegrepper.com/code-examples/python/python+write+requests+response+to+text+file
https://tutorialedge.net/golang/consuming-restful-api-with-go/
https://www.w3schools.com/js/js_json_intro.asp
https://www.w3schools.com/js/js_json_parse.asp
https://www.w3schools.com/js/js_api_intro.asp
https://www.w3schools.com/js/js_json_intro.asp
https://pngimg.com/download/39293
https://www.aspforums.net/Threads/562975/Count-number-of-times-Button-is-clicked-in-JavaScript-and-jQuery/
https://www.w3schools.com/jsref/met_loc_reload.asp
https://www.w3schools.com/jsref/jsref_tolowercase.asp#:~:text=The%20toLowerCase()%20method%20converts,a%20string%20to%20uppercase%20letters.
https://www.geeksforgeeks.org/html-clearing-the-input-field/
https://www.youtube.com/watch?v=k7XcOQGbzaQ
https://letsxd.com/?promoid=8WLD53GJ&mv=other
https://codepen.io/nathancockerill/pen/OQyXWb
w3d02 Leland morning exercise on modals
https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
https://www.w3schools.com/js/js_api_web_storage.asp
https://www.w3schools.com/jsref/prop_win_localstorage.asp
https://www.w3schools.com/jsref/prop_win_sessionstorage.asp
https://blog.logrocket.com/the-complete-guide-to-using-localstorage-in-javascript-apps-ba44edb53a36/

# COLOR SCHEME

_Partial_
#592A0E
#BFB3A4