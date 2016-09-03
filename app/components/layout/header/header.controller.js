( function () {
    'use strict'
    angular.module( 'daxude.controllers' )
        .controller( "HeaderController", HeaderController );

    function HeaderController ( $location, $window , $scope ) {

        let vm = this;

        ///////////////////

        vm.brand = "Daxude";
        vm.nav = {
            items        : [ { link : '/overview', text : 'Overview' },
                             { link : '/search', text : 'Search' },
                             { link : '/stats', text : 'Statistics' },
                             { link : '/rankings', text : 'Rankings' } ],
            visible      : false,
            isActive  : isActive,
            toggle    : toggle,
            isVisible : isVisible
        };

        ///////////////////

        activate();

        ///////////////////

        function activate() {
            var w = angular.element($window);
            $scope.$watch( () => $window.innerWidth, value => $scope.windowWidth = value, true );
            w.bind( 'resize', () => $scope.$apply() );
        }

        function isActive( item ) {
            return $location.path() === item.link;
        }

        function toggle() {
            vm.visible = !vm.visible;
        }

        function isVisible() {
            if (!vm.visible && angular.element($window).innerWidth() > 680)
                return true;
            return vm.visible;
        }
    }
} )();
