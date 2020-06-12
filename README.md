#  _Mr. Roboger's Neighborhood_

#### _Takes a user inputted number and outputs a list from 0->input number with certain values replaced with phrases_
##### __Created:__ 6/12/2020
##### __Last Updated:__ 6/12/2020 
##### By _**Tyson Lackey**_  

## Description

_Input form accepts number entry from the user. The input number is first checked to ensure it is a positive, whole number between 0->100000. Errors are outputted based on the infraction to the previous rules. If valid number is entered, it is broken into an array with the elements being whole numbers from 0 to the user inputed number. This array is passed through a converter to assign phrases to elements of the array that match the rules listed in the behavior below. The updated array is joined in a ", " delimited string and outputted to the user on a new frame._

## Behaviors

| Spec| Example input | Example Output
| ----------- | ----------- | ----------- |
| The user may only enter a number | n/a | -form set to only accept numbers- |
| The number entered must be a positive integer | "-40", "5.234" | "please enter a positive whole number" |
| The user inputed number will return a list of whole numbers from 0 to the user inputed number | "9" | "0, 1, 2, 3, 4, 5, 6, 7, 8, 9" |
| Any number on the outputted list containing a "1" will be replaced with "Beep!" | "5" | "0, beep!" |
| Any number on the outputted list containing a "2" will be replaced with "Boop!" | "2" | "0, beep!, boop!" |
| Any number on the outputted list containing a "3" will be replaced with "Won't you be my neighbor?" | "3" | "0, beep!, boop!, Won't you be my neighbor?"  |
| Any number on the outputted list containing a "1" and a "2", but not a "3" will be replaced with "Boop!" | "12" | "0, Beep!, boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, **Boop!**" |
| Any number on the outputted list containing a "1" and a "3", but not a "2" will be replaced with "Won't you be my neighbor?" | "13" | "0, Beep!, boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, **Won't you be my neighbor?**" |
Any number on the outputted list containing a "1", "2", and a "3" will be replaced with "Won't you be my neighbor?" | "123" | "..., **Won't you be my neighbor?**" |
| The user must be able to enter a new number and see new results | "2" --> "4" | "0, Beep!, Boop!" --> "0, Beep!, Boop!, Won't you be my neighbor?, 4" |


## Setup/Installation Requirements

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Open by downloading:
1. Internet Browser
2. Code editor like VScode to view the codebase

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Open by downloading:

1. Download this repository onto your computer
2. Double click index.html to open it in your web browser

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Open via Bash/GitBash:

1. Clone this repository onto your computer:
    "git clone https://github.com/Lackeyt/project-week3"
2. Navigate into the "project-week3" directory in Visual Studio Code or preferred text editor:
3. Open the project
    "code ."
3. Open index.html in your browser:
    "open index.html"

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View Directly in your Browser:

* Navigate to https://lackeyt.github.io/gh-pages/project-week3/ in your web browser.

## Known Bugs

* n/a

## Support and contact details

* Discord: TysonL#4409
* Email: lackeyt90@gmail.com


## Technologies Used

* Visual Studio Code
* HTML
* CSS
* Bootstrap
* Javascript
* JQuery

## Resources:

* https://codepen.io/astrotim/pen/KDBbe -helped with syntax for CSS transitions

### License

Copyright (c) 2020 **_Tyson Lackey_**

This software is licensed under the MIT license.