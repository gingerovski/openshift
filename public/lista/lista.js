angular.module('scotchTodo.dodaj', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'lista/lista.html',
    controller: 'ListCtrl'
  });
}])

.controller('ListCtrl', [function($scope, $http) {


}]);