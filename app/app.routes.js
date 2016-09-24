( function () {
    'use strict'
    angular.module( 'daxude.routes', [ 'ui.router' ] )
        .config( ($stateProvider, $urlRouterProvider) => {
            $stateProvider.state('dashboard', {
                url: "/dashboard",
                templateUrl: 'assets/templates/dashboard.html',
                controller: 'DashboardController as dashboard'
            }).state('search', {
                url: "/search",
                templateUrl: 'assets/templates/search.html',
                controller: 'SearchController as search'
            }).state('rankings', {
                url: "/rankings",
                templateUrl: 'assets/templates/rankings.html'
            }).state('stats', {
                url: "/stats",
                templateUrl: 'assets/templates/statistics.html'
            }).state('server', {
                abstract: true,
                url: '/server/:id',
                template: '<ui-view/>'
            }).state('server.view', {
                url: "/view",
                templateUrl: 'assets/templates/server-view.html',
                controller: 'ServerViewController as serverView'
            }).state('server.join', {
                url: "/join?password",
                templateUrl: 'assets/templates/server-join.html',
                controller: 'ServerJoinController as serverJoin'
            });
            $urlRouterProvider.otherwise("/dashboard");
        });
} )();
