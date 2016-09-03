( function () {
    'use strict'
    angular.module( 'daxude.directives' )
        .directive( "mostConnectionsRanking", mostConnectionsRanking );

    function mostConnectionsRanking () {
        let directive = {
            restrict: 'E',
            replace: true,
            controller: 'MostConnectionsRankingController',
            controllerAs: 'mostConnectionsRanking',
            templateUrl: 'assets/templates/most-connections-ranking.html'
        };
        return directive;
    }
} )();
