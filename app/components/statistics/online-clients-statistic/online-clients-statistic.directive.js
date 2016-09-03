( function () {
    'use strict'
    angular.module( 'daxude.directives' )
        .directive( "onlineClientsStatistic", onlineClientsStatistic );

    function onlineClientsStatistic () {
        let directive = {
            restrict: 'E',
            replace: true,
            controller: 'OnlineClientsStatisticController',
            controllerAs: 'onlineClientsStatistic',
            templateUrl: 'assets/templates/online-clients-statistic.html'
        };
        return directive;
    }
} )();
