( function () {
    'use strict'
    angular.module( 'daxude.directives' )
        .directive( "server", server );

    function server () {
        let directive = {
            restrict: 'E',
            scope: {
                'server': '='
            },
            bindToController: true,
            replace: true,
            controller: 'ServerController',
            controllerAs: 'server',
            templateUrl: 'assets/templates/server.html'
        };
        return directive;
    }
} )();
