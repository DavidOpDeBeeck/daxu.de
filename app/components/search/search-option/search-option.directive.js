( function () {
    'use strict'
    angular.module( 'daxude.directives' )
        .directive( "searchOption", searchOption );

    function searchOption () {
        let directive = {
            scope: {
                'name': '@',
                'value': '@',
                'option': '='
            },
            bindToController: true,
            restrict: 'E',
            controller: 'SearchOptionController',
            controllerAs: 'searchOption',
            templateUrl: 'assets/templates/search-option.html'
        };
        return directive;
    }
} )();
