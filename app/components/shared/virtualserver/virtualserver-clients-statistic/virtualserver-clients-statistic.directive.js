( function () {
    'use strict'
    angular.module( 'daxude.directives' )
        .directive( "virtualserverClientsStatistic", virtualserverClientsStatistic );

    function virtualserverClientsStatistic () {
        let directive = {
            restrict: 'E',
            scope: {
				'id': '='
			},
			bindToController: true,
            replace: true,
            controller: 'VirtualserverClientsStatisticController',
            controllerAs: 'virtualserverClientsStatistic',
            templateUrl: 'assets/templates/virtualserver-clients-statistic.html'
        };
        return directive;
    }
} )();
