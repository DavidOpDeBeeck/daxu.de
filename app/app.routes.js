( function () {
    'use strict'
    angular.module( 'daxude.routes', [ 'ngRoute' ] )
        .config( $routeProvider => {
            $routeProvider.when( '/overview', {
                controller: 'OverviewController',
                controllerAs: 'overview',
                templateUrl: 'assets/templates/overview.html'
            }).when( '/search', {
                controller: 'SearchController',
                controllerAs: 'search',
                templateUrl: 'assets/templates/search.html'
            }).when( '/stats', {
                templateUrl: 'assets/templates/statistics.html'
            }).when( '/rankings', {
                templateUrl: 'assets/templates/rankings.html'
            }).when( '/join/:virtualServerId', {
                controller: 'JoinController',
                controllerAs: 'join',
                templateUrl: 'assets/templates/join.html'
            }).otherwise({
                redirectTo: '/overview'
            })
        });
} )();
