var App = angular.module('myListStApp', ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider.when('/my_list',
        {
            templateUrl:'views/my_list.html',
            controller:'myListController'
        });
        $routeProvider.when('/to_buy',
        {
            templateUrl:'views/to_buy.html',
            controller:'toBuyController'
        });
        //$routeProvider.otherwise({redirectTo: '/question'});
        
});