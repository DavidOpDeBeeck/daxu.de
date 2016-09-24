( function () {
    'use strict'
    angular.module( 'daxude.directives' )
        .directive( "layoutHeader", layoutHeader );

    function layoutHeader () {
        let directive = {
            restrict: 'E',
            replace: true,
            controller: 'HeaderController',
            controllerAs: 'header',
            templateUrl: 'assets/templates/header.html'
        };
        return directive;
    }
} )();
