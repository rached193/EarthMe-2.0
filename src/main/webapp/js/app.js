angular.module('starter', ['ui.router'])

        .config(function($stateProvider, $urlRouterProvider){
            $stateProvider

                .state('starter', {
                    url: "/",
                    templateUrl: "index.html"
                })

                .state('home', {
                    url: "/home",
                    templateUrl: "templates/main/home.html",
                    controller: "MainCtrl"
                })

                .state('about', {
                    url: "/about",
                    templateUrl: "templates/main/about.html"
                });

            $urlRouterProvider.otherwise('home');
        });