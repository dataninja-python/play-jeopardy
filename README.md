**Jeo-MVP**

This is a trivia app that allows a user to answer jeopardy questions.

**HOW TO PLAY**





**REQUIRED FEATURES**
* Use HTML, CSS, JavaScript and JQuery
* Host on github pages
* Commit every day
* Write a README.md file with explanation of tech, approach, link, installation instructions, unsolved problems, etc
* Use AJAX to make a request to an external API and insert some of of the data retried into the DOM
* Implement responsive design
* Have one or more ocmplex user interface modules such as a carousel, a modal, a stick nav, tootips, etc




**POTENTIAL FEATURES**




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
[] limit user to answer only 20 questions total
[] allow fuzzy answer matching
[] enable scoring
[] display the question
[] display "right" or "wrong"
[] display answer
[] display score
[] display rules in modal

**ISSUES**

TIME MANAGEMENT
Estimating how long things would take was far more challenging than I anticipated.
Then, again I have little experience estimating the difficulty of projects like this. Data related issues have taken up 80% of time to date.


UNDEFINED DATA
After losing a day to api related data issues, I was forced to remove the need for repeated calls to the api by saving the needed data.
Frustrated with javascript, I turned to a language better suited for data munging Python. I also considered Go, Rust, and Ruby. But Python solved the problem fastest.


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

