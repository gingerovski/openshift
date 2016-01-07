var scotchTodo = angular.module('scotchTodo', ['ngRoute']);

scotchTodo.config(function($routeProvider) {
  $routeProvider

  .when('/',{
        templateUrl: '/lista/lista.html',
        controller : 'ListCtrl'
  })
  .when('/dodaj',{
        templateUrl: '/dodaj/dodaj.html',
        controller : 'ListCtrl'
  })
});

scotchTodo.controller('ListCtrl', function($scope, $http){

    // Pokaz wszystkie artykuła na starcie
    $http.get('/api/todos')
        .success(function(data) {
            $scope.todos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

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

});
