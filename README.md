# Placees You've Been

### _By: Liz Thomas & Jeff Lai

#### _A website where the user can keep track of all the places they've been._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery 3.6.0._

## Description

_This web application is a form that requires varius inputs to log the different places that they've traveled to. The user has the option to include informatin about the name of the place, the landmarks there, time of year that they visited, and any other notes. After clicking submit, they will be able to click on and view informatin about past places they've visited. This project was created during Week 4 at Epicodus._

## Setup/Installation Requirements

_This webpage can be viewed by creating a GitHub account and cloning this repository to your Desktop_

* #### _Your computer will need to have GIT installed_
* _If you do not currently have GIT installed you will need to follow the directions on GitHub's website for installing and setting up GIT. These can be found [here.](https://docs.github.com/en/get-started/quickstart/set-up-git)_
* _Once you have GIT set up, you will need to open up your terminal and type the command:_

git clone https://github.com/ekthomas25/4-14-places.git

* This will clone the repository to your desktop and you will be abble to then open the folder labeled "4-14-places"
* Open the file named "index.html" in your browser to view this project.


## Known Bugs

* _As of 211101, the project is not fully functional._

## License

_If you have any questions or would like to reach out for any reason, please don't hesitate to send and email to [thomas.elizabeth.k@gmail.com](mailto:thomas.elizabeth.k@gmail.com)._

MIT License

Copyright (c) 2021 Elizabeth Thomas & Jeff Lai

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



### Specs:

Describe: function Destination()

Test: "It should return an object with the property location, landmarks, time of year, notes."
Code: destination1 = new Destination("portland", "big pink", "june", "portland is weird");
      destination1.location;
Expected Output: "portland"

Test: "It should return the property location."
Code: Destination.prototype.locationMethod;
Expected Output: "portland"

Describe: function CollectionOfPlaces()

Test: "It should add a new Destination to CollectionOfPlaces"
Code: 
let collectionOfPlaces = new CollectionOfPlaces();
let destination1 = new Destination("portland", "big pink", "june", "portland is weird");
collectionOfPlaces.addDestination(destination1);
Expected Output: {"Portland":Location}

Test: "It should add a unique ID to each new destination that is added."
Code:
let destination1 = new Destination("portland", "big pink", "june", "portland is weird");
CollectionOfPlaces.prototype.assignId();
Expected Output: 1

Test: "It should retrieve the unique ID of a destination."
Code: CollectionOfPlaces.prototype.findDestination();
Expected Output: 1


<!-- Notes for completing Testing:

let collectionOfPlaces = new CollectionOfPlaces();
let destination1 = new Destination("portland", "big pink", "june", "portland is weird");
let destination2 = new Destination("seattle", "space needle", "july", "seattle is rainy");
collectionOfPlaces.addDestination(destination1);
collectionOfPlaces.addDestination(destination2);
 -->
