// let destination1 = new Destination("portland", "big pink", "june", "portland is weird");

// Business Logic for the Destination

function Destination(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

Destination.prototype.locationMethod = function() {
  return this.location;
};

//Business Logic for the ColletcionOfPlaces

function CollectionOfPlaces() {
  this.destinations = {};
  this.currentID = 0;
}

CollectionOfPlaces.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destinations[destination.id] = destination;
};

CollectionOfPlaces.prototype.assignId = function() {
this.currentID += 1;
return this.currentID;
}

CollectionOfPlaces.prototype.findDestination = function(id) {
  if (this.destinations[id] != undefined) {
    return this.destinations[id];
  }
  return false;
};

//User Interface Logic

let collectionOfPlaces = new CollectionOfPlaces();

function displayDestinationDetails(collectionOfPlacesToDisplay){
  let destinationsList = $("ul#destinations");
  let htmlForDestinationInfo = "";
  Object.keys(collectionOfPlacesToDisplay.destinations).forEach(function(key) {
    const destination = collectionOfPlacesToDisplay.findDestination(key);
    htmlForDestinationInfo += "<li id=" + destination.id + ">" + destination.location + "</li>";
  });
  destinationsList.html(htmlForDestinationInfo);
}

$(document).ready(function() {
  $("form#new-destination").submit(function(event) {
    event.preventDefault();
    const inputtedLocation = $("input#location").val();
    const inputtedLandmarks = $("input#landmarks").val();
    const inputtedTime = $("input#time").val();
    const inputtedNotes = $("input#notes").val();
    let newDestination = new Destination(inputtedLocation, inputtedLandmarks, inputtedTime, inputtedNotes);
    collectionOfPlaces.addDestination(newDestination);
    displayDestinationDetails(collectionOfPlaces);
  });
});