( function () {
    'use strict'
    angular.module( 'daxude.directives' )
        .directive( "averageClientsStatistic", AverageClientsStatistic );

    function AverageClientsStatistic () {
        let directive = {
            restrict: 'E',
            replace: true,
            controller: 'AverageClientsStatisticController',
            controllerAs: 'averageClientsStatistic',
            templateUrl: 'assets/templates/average-clients-statistic.html'
        };
        return directive;
    }
} )();
