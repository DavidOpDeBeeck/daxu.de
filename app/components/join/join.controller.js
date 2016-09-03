( function () {
    'use strict'
    angular.module( 'daxude.controllers' )
        .controller( "JoinController", JoinController );

    function JoinController ( API , $routeParams ) {

        let vm = this;

        ///////////////////

        vm.error;
        vm.virtualServer = {};

        ///////////////////

        vm.redirect = activate;

        activate();

        ///////////////////

        function activate() {
            let virtualServerId = $routeParams[ "virtualServerId" ];
            let password = $routeParams[ "password" ];

            API.LiveVirtualServer.get( {
                id : virtualServerId
            }, response => {
                if ( response.code === "404" ) {
                    vm.error = response.message[ 0 ];
                    return;
                }
                vm.virtualServer = response;
                if ( password )
                    window.location = "ts3server://daxu.de?port=" + vm.virtualServer.port + "&password=" + password;
                else
                    window.location = "ts3server://daxu.de?port=" + vm.virtualServer.port;
            } );
        }
    }
} )();
