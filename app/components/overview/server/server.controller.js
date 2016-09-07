( function () {
    'use strict'

    class ServerController {
        constructor(API) {
            this.id = this.serverInfo.id;
            this.name = this.serverInfo.name;
            this.online_clients = this.serverInfo.online_clients;
            this.max_clients = this.serverInfo.max_clients;
            this.clients = API.LiveVirtualServerClients.query({ id : this.id });
        }
    }

    angular.module( 'daxude.controllers' )
        .controller( "ServerController", ServerController );
} )();
