angular.module("floorplanner", [])

.config(function ($routeProvider) {
  $routeProvider
        .when('/floorplan',
            {
              controller: 'FloorplanController',
              templateUrl: 'floorplanner/index.tmpl.html'
            })
        .otherwise({ redirectTo: '/' });
})

require("./controllers/FloorplanController")