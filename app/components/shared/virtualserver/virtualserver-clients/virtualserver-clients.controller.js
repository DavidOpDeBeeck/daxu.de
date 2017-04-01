( function () {
    'use strict'

    class VirtualserverClientsController {
        constructor(API) {
            API.LiveVirtualServer.get({
                id : this.id
            }, virtualserver => {
                this.name = virtualserver.name;
            });
            API.LiveVirtualServerClients.query({
              id : this.id
            }, clients => this.clients = clients);
        }
    }

    angular.module( 'daxude.controllers' )
        .controller( "VirtualserverClientsController", VirtualserverClientsController );
} )();
