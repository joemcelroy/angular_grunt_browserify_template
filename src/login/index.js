angular.module("login",[])

.config(function ($routeProvider) {
  $routeProvider
        .when('/',
            {
              controller: 'LoginController',
              templateUrl: 'login/index.tmpl.html'
            })
        .otherwise({ redirectTo: '/' });
})

.controller("LoginController", function($scope, AuthService) {

    $scope.loginUser = function () {
      var promise = AuthService.loginUser($scope.userName, $scope.password);
      promise.then(function () {
        console.log("done")
      }, function (errorArgument) {
    });

  };
})