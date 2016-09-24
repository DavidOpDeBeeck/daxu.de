( function () {
    'use strict'
    angular.module( 'daxude.directives' )
        .directive( "onlineClientsPerServerStatistic", onlineClientsPerServerStatistic );

    function onlineClientsPerServerStatistic () {
        let directive = {
            restrict: 'E',
            replace: true,
            controller: 'OnlineClientsPerServerStatisticController',
            controllerAs: 'onlineClientsPerServerStatistic',
            templateUrl: 'assets/templates/online-clients-per-server-statistic.html'
        };
        return directive;
    }
} )();
