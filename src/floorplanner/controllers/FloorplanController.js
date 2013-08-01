angular.module("floorplanner")

.controller("FloorplanController", function($scope) {

    $scope.tables = [
      
      {
        name:"table 1",
        x:200,
        y:300
      },
      
      {
        name:"table 2",
        x: 400,
        y: 300
      }

    ]

});