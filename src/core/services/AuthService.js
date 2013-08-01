angular.module("core")

.service('AuthService', function ($http, $q) {
  this.loginUser = function (username, password) {
    currentUserName = username;
    currentUserPassword = password;
    
    var deferred = $q.defer();
    $http.post('/api/Account/Login', {
      UserName: username,
      Password: password
    }).success(function (data, status, headers, config) {
      restaurants = data.DataObject;
      deferred.resolve(restaurants);
    }).error(function (data, status, headers, config) {
      deferred.reject();
    });
    return deferred.promise;
  };
  
});