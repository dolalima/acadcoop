var app = angular.module('acad', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when('/', {
                    templateUrl: 'views/faculdade/index.html',
                    controller: 'FaculdadeController'
                })
                .when('/faculdade/:faculdadeId', {
                    templateUrl: 'views/faculdade/single.html',
                    controller: 'FaculdadeController'
                })                
                .otherwise({
                    redirectTo: '/'
                });

    }]);

app.controller('MainController', function ($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
});

app.controller('FaculdadeController', function ($scope, $routeParams) {

});

app.controller('AtividadeController', function ($scope, $routeParams) {

});

app.controller('MaterialController', function ($scope, $routeParams) {

});

