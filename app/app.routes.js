( function () {
    'use strict'
    angular.module( 'daxude.routes', [ 'ui.router' ] )
        .config( ($stateProvider, $urlRouterProvider) => {
            $stateProvider.state('overview', {
                url: "/overview",
                templateUrl: 'assets/templates/overview.html',
                controller: 'OverviewController as overview'
            }).state('search', {
                url: "/search",
                templateUrl: 'assets/templates/search.html',
                controller: 'SearchController as search'
            }).state('join', {
                url: "/join/:virtualServerId",
                templateUrl: 'assets/templates/join.html',
                controller: 'JoinController as join'
            }).state('server', {
                url: "/server/:virtualServerId",
                templateUrl: 'assets/templates/server-view.html',
                controller: 'ServerViewController as serverView'
            }).state('rankings', {
                url: "/rankings",
                templateUrl: 'assets/templates/rankings.html'
            }).state('stats', {
                url: "/stats",
                templateUrl: 'assets/templates/statistics.html'
            });
            $urlRouterProvider.otherwise("/overview");
        });
} )();
