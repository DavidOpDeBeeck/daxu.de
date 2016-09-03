( function () {
    'use strict'
    angular.module( 'daxude.directives' )
        .directive( "clientCountriesStatistic", clientCountriesStatistic );

    function clientCountriesStatistic () {
        let directive = {
            restrict: 'E',
            replace: true,
            controller: 'ClientCountriesStatisticController',
            controllerAs: 'clientCountriesStatistic',
            templateUrl: 'assets/templates/client-countries-statistic.html'
        };
        return directive;
    }
} )();
