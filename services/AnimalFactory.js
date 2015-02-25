animalShelter.factory('AnimalFactory', function AnimalFactory() {
  var factory = {};
  factory.animals = [];

  factory.addAnimal = function() {
    var animal = { name: factory.animalName, dog: false, cat: false, bunny: false, unassigned: true};
    factory.animals.push(animal);
    factory.animalName = null;
  };

  factory.deleteAnimal = function(animal) {
    var index = factory.animals.indexOf(animal)
    factory.animals.splice(index, 1);
  };

  factory.typeIsDog = function(animal) {
    clearSpecies(animal);
    animal.dog = true;
  }
  factory.typeIsCat = function(animal) {
    clearSpecies(animal);
    animal.cat = true;
  }
  factory.typeIsTurtle = function(animal) {
    clearSpecies(animal);
    animal.turtle = true;
  }

  var clearSpecies = function(animal) {
    animal.cat = false;
    animal.turtle = false;
    animal.dog = false;
    animal.unassigned = false;
  }

  return factory;
});
