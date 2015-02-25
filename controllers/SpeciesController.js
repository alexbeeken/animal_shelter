animalShelter.controller('SpeciesCtrl', function SpeciesCtrl($scope, AnimalFactory) {
  $scope.animals = AnimalFactory.animals;
  $scope.AnimalFactory = AnimalFactory;
});
