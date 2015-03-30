var app = angular.module('acad', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when('/', {
                    templateUrl: 'views/faculdade/index.html',
                    controller: 'FaculdadeController'
                })
                .when('/faculdade/:faculdadeId', {
                    templateUrl: 'views/faculdade/form.html',
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




app.controller('FaculdadeController', function ($scope, $http, $routeParams) {

    var faculdade = this;
    this.lista = [];

    $http.get('api/faculdades.json').
            success(function (data) {
                faculdade.lista = data;
            }).
            error(function () {
                faculdade.lista = [];
            });
});




app.controller('AtividadeController', function ($scope, $routeParams) {
    
    var atividades = this;
    this.lista = [];

    $http.get('api/atividades.json').
            success(function (data) {
                atividades.lista = data;
            }).
            error(function () {
                atividades.lista = [];
            });
            
});

app.controller('MaterialController', function ($scope, $routeParams) {

});

