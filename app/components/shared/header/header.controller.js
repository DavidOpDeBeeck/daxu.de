( function () {
    'use strict'
    angular.module( 'daxude.controllers' )
        .controller( "HeaderController", HeaderController );

    function HeaderController ( $window , $scope ) {

        let vm = this;

        ///////////////////

        vm.brand = "Daxude";
        vm.nav = {
            items     : [ { state : 'dashboard', text : 'Dashboard' },
                          { state : 'search', text : 'Search' },
                          { state : 'stats', text : 'Statistics' },
                          { state : 'rankings', text : 'Rankings' } ],
            visible   : false,
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
