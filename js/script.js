/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


const citation = document.getElementById("citation")
const source = document.getElementById("source")
const year = document.getElementById("year")
const quote = document.getElementById("quote")


const quotes = [ //Object for all of the quotes
  {
    quote: "You miss 100% of the shots you don not take.",
    source: "Wayne Gretzky",
    citation: "",
    year: "1983"
  },
  {
    quote: "Whether you think you can or you think you cant, youre right.",
    source: "Henry Ford",
    citation: "",
    year: ""
  },
  {
    quote: "The only person you are destined to become is the person you decide to be.",
    source: "Ralph Waldo Emerson",
    citation: "",
    year: "1991"
  },
  {
    quote: "An unexamined life is not worth living.",
    source: "Socrates",
    citation: "",
    year: ""
  },
  {
    quote: "Dream big and dare to fail.",
    source: "Norman Vaughan",
    citation: "",
    year: "1930"
  }
];

let currentQuote = 0  //Shows the quote that is currently in use
let newQuote = null  //Will show the quote that was randomly picked
let x = true //For the while loop

function getRandomQuote(quoteSection) {
  while(x == true) {
    newQuote = Math.floor(Math.random() * 4);  //Picks a random number from 0 - 4
    if(newQuote == currentQuote) {  //Makes sure that the quote that was picked is not already on
      x = true
    } else {
      currentQuote = newQuote
      return quotes[newQuote][quoteSection]
      break
    }
  }
}


function printQuote() {
  quote.innerHTML = getRandomQuote("quote")
  citation.innerHTML = getRandomQuote("citation")
  year.innerHTML = getRandomQuote("year")
  source.innerHTML = getRandomQuote("source")
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);