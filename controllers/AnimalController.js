animalShelter.controller('AnimalCtrl', function AnimalCtrl($scope, AnimalFactory) {
  $scope.animals = AnimalFactory.animals;
  $scope.AnimalFactory = AnimalFactory;
});
