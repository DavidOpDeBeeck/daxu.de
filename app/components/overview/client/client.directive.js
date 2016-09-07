( function () {
    'use strict'
    angular.module( 'daxude.directives' )
        .directive( "client", client );

    function client () {
        let directive = {
            restrict: 'E',
            scope: {
                'clientInfo': '='
            },
            bindToController: true,
            replace: true,
            controller: 'ClientController',
            controllerAs: 'client',
            templateUrl: 'assets/templates/client.html'
        };
        return directive;
    }
} )();
