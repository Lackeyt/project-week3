#  _Mr. Roboger's Neighborhood_

#### _{brief desc}_
##### __Created:__ 5/29/2020
##### __Last Updated:__ 6/3/2020 
##### By _**Tyson Lackey**_  

## Description

_{detailed desc}_

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

* 

### License

Copyright (c) 2020 **_Tyson Lackey_**

This software is licensed under the MIT license.