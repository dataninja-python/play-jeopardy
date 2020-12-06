**Jeo-MVP**

This is a trivia app that allows a user to answer jeopardy questions.


**GOAL:**
MVP app that allows a user to play a round of jeopardy


**THE PLAN IN PSEUDOCODE**
1. pull a number of jeopardy category options
2. narrow the selection down to just datasets with 5 questions
3. remove unclean datasets
4. select the first 3 datasets as categories
5. store the game categories and all relevant information as 3 objects
6. create the jeopardy front-end
7. allow user to click on a dollar amount to get a question
8. user can then answer the question
9. if the user answers correctly, give the money; else subtract the money
10. display an updated score after each question and at end


**THE PLAN IN ACTION**
[x] due to api issues, MVP was simplifid to allow the user to get 1 random question at a time 20 times and tabulate the score
[x] limit user to answer only 20 questions total
[] allow fuzzy answer matching
[] enable scoring
[x] display the question
[] display "right" or "wrong"
[] display answer
[] display score
[] display rules in modal || have a sticky nav bar


**HOW TO PLAY**





**REQUIRED FEATURES**
* Use HTML, CSS, JavaScript and JQuery
* Host on github pages
* Commit every day
* Write a README.md file with explanation of tech, approach, link, installation instructions, unsolved problems, etc
* Use AJAX to make a request to an external API and insert some of of the data retried into the DOM
* Implement responsive design
* Have one or more complex user interface modules such as a carousel, a modal, a stick nav, tootips, etc


**POTENTIAL FEATURES**
* add categories
* set up to play more like jeopardy with clicking of multiple squares
* allow to play a full jeopardy game by rounds
* enable the daily double where you can place a wager of up to all your current money


**ISSUES**

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



**PARTIAL SOURCE LIST**
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

