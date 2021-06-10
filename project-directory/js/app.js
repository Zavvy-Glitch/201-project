'use strict';

// proof of life

console.log('Welcome to my Page!');

alert('Let\'s play a game!');

let userName = prompt('Please tell me your name.');
console.log('username', userName);

while (userName === null || userName === '') {
  userName = prompt ('I\'m sorry, I didn\'t get that. Please enter your name in again.');
}

alert('Welcome, ' + userName + ' I appreciate you visitng! Let\'s get started!');

let favoriteFruitsArray = ['pineapple', 'pomegranate', 'lychee', 'green grape', 'cara cara orange', 'mango', 'persimmon', 'guava', 'peach', 'rambutan'];
console.log('Preferred Fruits', favoriteFruitsArray);

// let userGuess = prompt ('Can you guess one of my favorite fruits?');
// console.log('User Guess', userGuess);

// for (let index = 0; index < favoriteFruitsArray.length; index++){
//   if(userGuess === favoriteFruitsArray[index]) {
//     alert('Correct! That\'s surprising!');
//   }
//   console.log('checking fruits', favoriteFruitsArray[index]);
// }

let userNumberGuess = 6;
let correctAnswer = false;
// start outer loop here
while (correctAnswer === false && userNumberGuess > 0) {
  let userGuess = prompt ('Can you guess one of my favorite fruits?');
  // start inner loop here
  for (let index = 0; index < favoriteFruitsArray.length; index++){
    // for << will need to contain (declaration ; comparison ; change}
    if(userGuess === favoriteFruitsArray[index]) {
      alert('Correct! That\'s surprising!');
      console.log('checking fruits', favoriteFruitsArray[index]);
      correctAnswer = true;
      break;
    }
  }
  if (correctAnswer === false) {
    alert('Sorry, that wasn\'t correct. Please try again');
  }
  userNumberGuess--;
}

// start of question one

let qOne = prompt('Am I 31 years old?');
let lowercaseQone = qOne.toLowerCase();

console.log('response one ' + qOne);

if (lowercaseQone === 'yes' || lowercaseQone === 'y') {
  alert('You\'re right! I certainly am, ' + userName + '.');
} else if (lowercaseQone === 'no' || lowercaseQone === 'n') {
  alert('Thank you, ' + userName + '.' + ' I don\'t feel 31!');
}

// start of question two

let qTwo = prompt('Would you believe I hate socks?');
let lowercaseQtwo = qTwo.toLowerCase();

console.log('response two ' + qTwo);

if (lowercaseQtwo === 'yes' || lowercaseQtwo === 'y') {
  alert('I absolutely cannot stand them! Who enjoys sweaty feet?');
} else if (lowercaseQtwo === 'no' || lowercaseQtwo === 'n') {
  alert('On the contrary, ' + userName + ' I cannot stand them!');
}

// start of question three

let qThree = prompt('Do I have 38 thriving plants?');
let lowercaseQthree = qThree.toLowerCase();

console.log('response three ' + qThree);

if (lowercaseQthree === 'yes' || lowercaseQthree === 'y') {
  alert('Right on the nose, ' + userName + '.' + ' I\'ll be adding more to the collection!');
} else if (lowercaseQthree === 'no' || lowercaseQthree === 'n') {
  alert('Someone didn\'t listen first day of class!');
}

// start of question four

let qFour = prompt('Have I stepped foot on 5 of 7 continents?');
let lowercaseQfour = qFour.toLowerCase();

console.log('response four ' + qFour);

if (lowercaseQfour === 'yes' || lowercaseQfour === 'y') {
  alert('Correct, ' + userName + '!' + ' Australia and Antartica are next!');
} else if (lowercaseQfour === 'no' || lowercaseQfour === 'n') {
  alert('Incorrect, I\'m working on the last 2!');
}

// start of question five

let qFive = prompt('Would you believe that I had broken 4 ribs as a child and have not recieved medical attention since?');
let lowercaseQfive = qFive.toLowerCase();

console.log('response five ' + qFive);

if (lowercaseQfive === 'yes' || lowercaseQfive === 'y') {
  alert('Well, you\'re right! It\'s a long story though');
} else if (lowercaseQfive === 'no' || lowercaseQfive === 'n') {
  alert('I wish I could say no, ' + userName + '.' + ' It\'s the truth though.');
}
