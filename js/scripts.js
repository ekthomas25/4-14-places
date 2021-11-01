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