

mojRout.config(function($routeProvider){
	$routeProvider

		// Lista artykułów
		.when('/',{
			templateUrl : 'strony/lista.html',
			controller  : 'listacontroller'
		})

		// Dodaj artykuł
		.when('/about',{
			templateUrl : 'strony/dodaj.html',
			controller  : 'dodajcontroller'
		})
});

mojRout.controller('listacontroller',function($scope){
	$scope.message = 'Gitara main';
});

mojRout.controller('dodajcontroller',function($scope){
	$scope.message = 'dodaj art';
});