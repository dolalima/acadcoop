var app = angular.module('acad', ['ngRoute']);

app.filter('getById', function() {
  return function(input, id) {
    var i=0, len=input.length;
    for (; i<len; i++) {
      if (+input[i].id == +id) {
        return input[i];
      }
    }
    return null;
  }
});
app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when('/', {
                    templateUrl: 'views/faculdade/index.html'
                })
                .when('/faculdade/cadastro/:faculdadeId', {
                    templateUrl: 'views/faculdade/form.html'
                })
                .when('/atividade', {
                    templateUrl: 'views/atividade/index.html'
                })
                .when('/atividade/cadastro', {
                    templateUrl: 'views/atividade/form.html'
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

app.controller('FaculdadeCadastroController', function ($scope,$filter, $http, $routeParams) {

    var cadastro = this;
    this.entidade = {};
    this.estados = [];
    this.cidades = [];
    
    this.getCidades = function(estadoId){
        $http.get('api/cidades.json',{Estado:estadoId}).
            success(function (data) {
                cadastro.estados = data;
            }).
            error(function () {
                cadastro.estados = [];
            });
    };
    
    $http.get('api/faculdades.json',{id:$routeParams.faculdadeId}).
            success(function (data) {
                cadastro.entidade = $filter('getById')(data, $routeParams.faculdadeId);
                console.debug(cadastro.entidade);
            }).
            error(function () {
                cadastro.entidade = {};
            });

    $http.get('api/estados.json').
            success(function (data) {
                cadastro.estados = data;
            }).
            error(function () {
                cadastro.estados = [];
            });
});




app.controller('AtividadeController', function ($scope,$http,$routeParams) {
    
    var atividade = this;
    this.lista = [];

    $http.get('api/atividades.json').
            success(function (data) {
                atividade.lista = data;
            }).
            error(function () {
                atividade.lista = [];
            });
            
});

app.controller('MaterialController', function ($scope, $routeParams) {

});

