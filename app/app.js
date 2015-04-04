var app = angular.module('acad', ['ngRoute']);

app.filter('getById', function () {
    return function (input, id) {
        var i = 0, len = input.length;
        for (; i < len; i++) {
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
                .when('/atividade/cadastro/:atividadeId', {
                    templateUrl: 'views/atividade/form.html'
                })
                .when('/disciplina', {
                    templateUrl: 'views/disciplina/index.html'
                })
                .when('/disciplina/cadastro/:disciplinaId', {
                    templateUrl: 'views/disciplina/form.html'
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

app.controller('FaculdadeCadastroController', function ($scope, $filter, $http, $routeParams) {

    var cadastro = this;
    this.entidade = {};
    this.estados = [];
    this.cidades = [];

    $http.get('api/cidades.json').
            success(function (data) {
                cadastro.cidades = data;
            }).
            error(function () {
                cadastro.cidades = [];
            });


    $http.get('api/faculdades.json', {id: $routeParams.faculdadeId}).
            success(function (data) {
                cadastro.entidade = $filter('getById')(data, $routeParams.faculdadeId);                
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




app.controller('AtividadeController', function ($scope, $http, $routeParams) {

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

app.controller('AtividadeCadastroController', function ($scope, $filter, $http, $routeParams) {

    var cadastro = this;
    this.entidade = {};
    this.disciplinas = [];
    
    $http.get('api/disciplinas.json').
            success(function (data) {
                cadastro.disciplinas = data;
            }).
            error(function () {
                cadastro.disciplinas = [];
            });

    $http.get('api/atividades.json').
            success(function (data) {
                cadastro.entidade = $filter('getById')(data, $routeParams.atividadeId);                
            }).
            error(function () {
                cadastro.entidade = {};
            });    
});

app.controller('DisciplinaController', function ($scope, $http, $routeParams) {

    var disciplina = this;
    this.lista = [];

    $http.get('api/disciplinas.json').
            success(function (data) {
                disciplina.lista = data;
            }).
            error(function () {
                disciplina.lista = [];
            });

});

app.controller('DisciplinaCadastroController', function ($scope, $http,$filter, $routeParams) {

    var cadastro = this;
    this.entidade = {};

    $http.get('api/disciplinas.json').
            success(function (data) {
                cadastro.entidade = $filter('getById')(data, $routeParams.disciplinaId);                
            }).
            error(function () {
                cadastro.entidade = {};
            });

});

app.controller('MaterialController', function ($scope, $routeParams) {

});

