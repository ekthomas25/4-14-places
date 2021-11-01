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

//Business Logic for the colletcion of Places

function CollectionOfPlaces() {
  this.destinations = {};
}

CollectionOfPlaces.prototype.addDestination = function(destination) {
  this.destinations[destination.location] = location;
};