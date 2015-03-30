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




app.controller('FaculdadeController', function ($scope, $http, $routeParams) {
    
    var teste = this;    
    
        
        this.lista = [];
        
        $(document).ready(function(){
            $http.get('api/faculdades.json').
                success(function (data) {
                    
                        teste.lista = data;  
                   
                                      
                }).
                error(function () {
                    
                        teste.lista = [];  
                    
                    
                });
        });
        

    });

app.controller('AtividadeController', function ($scope, $routeParams) {

});

app.controller('MaterialController', function ($scope, $routeParams) {

});

