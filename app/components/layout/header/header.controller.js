( function () {
    'use strict'
    angular.module( 'daxude.controllers' )
        .controller( "HeaderController", HeaderController );

    function HeaderController ( $scope ) {

        let vm = this;

        ///////////////////

        vm.brand = {
            primary: "Daxude",
            secondary: "Teamspeak"
        };
        vm.nav = {
            items     : [ { state : 'dashboard', text : 'Dashboard' },
                          { state : 'search', text : 'Search' },
                          { state : 'stats', text : 'Statistics' },
                          { state : 'rankings', text : 'Rankings' } ],
            visible   : false,
            toggle    : toggle
        };

        ///////////////////

        function toggle() {
            this.visible = !this.visible;
        }
    }
} )();
