# Placees You've Been

### _By: Liz Thomas & Jeff Lai


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


<!-- destination2 = new Destination("seattle", "space needle", "july", "seattle is rainy");

Update CollectionOfPlaces constructor
Define another prototype for assigning ID
Update addDestination prototype

collectionOfPlaces.destinations[1]

let collectionOfPlaces = new CollectionOfPlaces();
let destination1 = new Destination("portland", "big pink", "june", "portland is weird");
let destination2 = new Destination("seattle", "space needle", "july", "seattle is rainy");
collectionOfPlaces.addDestination(destination1);
collectionOfPlaces.addDestination(destination2);
 -->
