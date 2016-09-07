( function () {
    'use strict'

    class ServerViewController {
        constructor(API, $stateParams) {
            API.LiveVirtualServer.get({
                id : $stateParams["virtualServerId"]
            }, server => {
                this.name = server.name;
                this.online_clients = server.online_clients;
                this.max_clients = server.max_clients;
            });
        }
    }

    angular.module( 'daxude.controllers' )
        .controller( "ServerViewController", ServerViewController );
} )();
