'use strict';

//proof of life

console.log('Welcome to my Page');

let userName = prompt('Please tell me your name.');

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
