angular.module('scotchTodo.dodaj', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dodaj', {
    templateUrl: 'dodaj/dodaj.html',
    controller: 'AddCtrl'
  });
}])

.controller('Add1Ctrl', [function($scope, $http) {
    
	$scope.formData = {};

	// when submitting the add form, send the text to the node API
    $scope.createTodo = function() {
        $http.post('/api/todos', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // Usuń artykuł
    $scope.deleteTodo = function(id) {
        $http.delete('/api/todos/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
}]);