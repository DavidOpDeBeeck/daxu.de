( function () {
    'use strict'
    angular.module( 'daxude.directives' )
        .directive( "layoutFooter", layoutFooter );

    function layoutFooter () {
        let directive = {
            restrict: 'E',
            replace: true,
            controller: 'FooterController',
            controllerAs: 'footer',
            templateUrl: 'assets/templates/footer.html'
        };
        return directive;
    }
} )();
