( function () {
    'use strict'
    angular.module( 'daxude.controllers' )
        .controller( "ServerController", ServerController );

    function ServerController ( API , UTIL ) {

        let vm = this;

        ///////////////////

        vm.id = vm.server.id;
        vm.name = vm.server.name;
        vm.online_clients = vm.server.online_clients;
        vm.max_clients = vm.server.max_clients;
        vm.clients = [];

        ///////////////////

        activate();

        ///////////////////

        function activate() {
            API.LiveVirtualServerClients.query( { id : vm.id }, clients => {
                vm.clients = clients.map( client => {
                    client.time_connected_text = UTIL.msToTime(client.time_connected);
                    return client;
                });
            });
        }
    }
} )();
