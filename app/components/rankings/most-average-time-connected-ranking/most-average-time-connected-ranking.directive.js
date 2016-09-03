( function () {
    'use strict'
    angular.module( 'daxude.directives' )
        .directive( "mostAverageTimeConnectedRanking", mostAverageTimeConnectedRanking );

    function mostAverageTimeConnectedRanking () {
        let directive = {
            restrict: 'E',
            replace: true,
            controller: 'MostAverageTimeConnectedRankingController',
            controllerAs: 'mostAverageTimeConnectedRanking',
            templateUrl: 'assets/templates/most-average-time-connected-ranking.html'
        };
        return directive;
    }
} )();
