( function () {
    'use strict'
    angular.module( 'daxude.directives' )
        .directive( "mostPointsRanking", mostPointsRanking );

    function mostPointsRanking () {
        let directive = {
            restrict: 'E',
            replace: true,
            controller: 'MostPointsRankingController',
            controllerAs: 'mostPointsRanking',
            templateUrl: 'assets/templates/most-points-ranking.html'
        };
        return directive;
    }
} )();
