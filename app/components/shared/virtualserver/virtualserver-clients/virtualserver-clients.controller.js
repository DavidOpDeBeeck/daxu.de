( function () {
    'use strict'

    class VirtualserverClientsController {
        constructor(API) {
            API.LiveVirtualServerClients.query({
              id : this.id
            }, clients => this.clients = clients);
        }
    }

    angular.module( 'daxude.controllers' )
        .controller( "VirtualserverClientsController", VirtualserverClientsController );
} )();
