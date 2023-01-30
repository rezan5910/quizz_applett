// timed multi choice question quizz that stores high scores
// dynamically uipdated html and css

//quizz
// start button
// function on click start
//on click start button starts timer and first question appears

//questions
// foreach question dispaly multi choices
//when correct answer move to next
//if questions incorrect subtract time from clock

//quizz end if timer hits 0 or questions end
//display user time
// promp user to enter name
// store intitials in local storage

//define the dom elementas

//array of questions and answers
// loop through questions to generate html dynamically
/*
,
    {
        character:'',
        options : 
        ['','',''],
        answer: ''
    }
    */
/**
 * DOM Elements
 */
// defining the DOM elements to use in functions below
let starterScreenElement = document.querySelector("#start-screen");
let questionsElement = document.querySelector("#questions");
let timerElement = document.querySelector('#time');
let finalChapter = document.querySelector('#end-screen');
let userScrore = document.querySelector('#final-score');
let startButton = document.querySelector('#start');
let cardTitleElement =document.querySelector('#question-title')
let optionsElement = document.querySelector('#options')


let cardIndex=0;
//allocationg maximum of 10 seconds per question also taking away 10 seconds for wrong answer
// 46 characters * 10 seconds =460 seconds/60 secper min = 7.7 min
let time = charArray.length * 10;
//timer identification
let timeId;
/**
 * Event listners
 */

//start button get to pop the quiz
startButton.addEventListener('click', popQuiz);

/**
 * Functions
 */
// function for starting the quiz
function popQuiz() {
  // hides start screen
  starterScreenElement.setAttribute("class", "hide");
  // reveal the questions
  questionsElement.removeAttribute("class");
  //timer begins adn value tracked in 
  timeId = setInterval(countDown, 1000);
// displaying the starting time
  timerElement.textContent = time;
  //displaythe quiz cards
  displayCards();
}
// function displaying the character cards
function displayCards(){
    //capture the current card object fromt he character array/questions.js
    let cardNow = charArray[cardIndex];

    //update the questions title with the current card from the array
    cardTitleElement.textContent=cardNow.title;
    //claring the older questions options
    optionsElement.innerHTML='';

    //looping over the options and assigning them to the cards and dipslayiong them
    cardNow.options.forEach((option, i)=>{
        //genertaing buttons for each option to be selected
        let optionsButton = document.createElement('button');
        optionsButton.setAttribute('class','option')
        optionsButton.setAttribute('value',option);

        
    })

}
// coundown function fromt he timer set
function countDown (){
    //countdown
    time--;
    //displaying the count down 
    timerElement.textContent = time;

    // has the user run out of time yet
    if (time <= 0){
        stopPop();
    }
}

// end of quiz function
function stopPop(){
    // stop the interval
    clearInterval(timeID);
    
    // finalchapter removing the hide class
    finalChapter.removeAttribute('class');

    // post final results
    userScrore.textContent = time;

    //hide the cards
    questionsElement.setAttribute('class','hide');
}
