( function () {
    'use strict'
    angular.module( 'daxude.directives' )
        .directive( "virtualserverAverageClientsStatistic", VirtualserverAverageClientsStatistic );

    function VirtualserverAverageClientsStatistic () {
        let directive = {
            restrict: 'E',
            scope: {
				'id': '='
			},
			bindToController: true,
            replace: true,
            controller: 'VirtualserverAverageClientsStatisticController',
            controllerAs: 'virtualserverAverageClientsStatistic',
            templateUrl: 'assets/templates/virtualserver-average-clients-statistic.html'
        };
        return directive;
    }
} )();
