( function () {
    'use strict'
    angular.module( 'daxude.directives' )
        .directive( "clientPlatformsStatistic", clientPlatformsStatistic );

    function clientPlatformsStatistic () {
        let directive = {
            restrict: 'E',
            replace: true,
            controller: 'ClientPlatformsStatisticController',
            controllerAs: 'clientPlatformsStatistic',
            templateUrl: 'assets/templates/client-platforms-statistic.html'
        };
        return directive;
    }
} )();
