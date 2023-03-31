# _Mr. Roboger's Neighborhood_

#### By _**Gareth Grindeland**_

#### _A student web application built with JavaScript, HTML, and CSS._

## Technologies Used

* Git
* HTML
* CSS
* JavaScript
* Bootstrap version 5.2.3
* Dillinger online markdown editor

## Description

_This is a student project built from scratch using JavaScript, HTML, and CSS in order to demonstrate an understanding of arrays, looping, and test-driven development. On the webpage, the user can input a number which will generate an array and replace all the elements containing the digits 1, 2, or 3 with some robot jargon. If the user attempts to enter a decimal or a negative number, they will be prompted to enter a positive number. Each time the form is submitted, the results will update. This was submitted as an independent coding review project for week 3 of the full-time Epicodus C# and React course._

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Navigate to the top level of the directory._
* _Open index.html in your browser._
* _Enter a positive whole number into the input field and click "Submit."_

## Tests
```
Describe: isPositiveInt()

Test: "It should return true if the input is a positive number."
Code: 
isPositiveInt(4);
Expected Output: true;

Test: "It should return false if the input is a negative number."
Code: 
isPositiveInt(-4);
Expected Output: false;

Test: "It should return false if the input is 0 or not a number."
Code: 
isPositiveInt("hello");
isPositiveInt(0);
Expected Output: false;


Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number."
Code: 
beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5];

Test: "It should replace each element with a 1 with the phrase 'Beep!'."
Code:
beepBoop(5);
Expected Output: [0, "Beep!", 2, 3, 4, 5];

Test: "It should replace each 2 with the phrase 'Boop!'."
Code:
beepBoop(5);
Expected output: [0, "Beep!", "Boop!", 3, 4, 5];

Test: "It should replace each 3 with the phrase 'Won't you be my neighbor?'."
Code:
beepBoop(5);
Expected output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5];

Test: "It should replace every element that contains the digit 1 with the phrase 'Beep!'."
Code:
beepBoop(11);
Expected output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!"];

Test: "It should replace each and every element that contains the digit 2 with the phrase 'Boop!' and the digit 3 with the phrase 'Won't you be my neighbor?' with the hierarchy of 3>2>1."
Code:
beepBoop(14);
Expected output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep"];
```

## Known Bugs

* _No known bugs_

## License

_MIT_
_Copyright (c) 2023 Gareth Grindeland_

