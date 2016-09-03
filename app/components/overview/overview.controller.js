( function () {
    'use strict'
    angular.module( 'daxude.controllers' )
        .controller( "OverviewController", OverviewController );

    function OverviewController ( API , UTIL ) {

        let vm = this;

        ///////////////////

        vm.virtualservers = [];

        ///////////////////

        activate();

        ///////////////////

        function activate() {
            API.LiveVirtualServers.query( virtualservers => {
              vm.virtualservers = virtualservers;
            });
        }
    }
} )();
