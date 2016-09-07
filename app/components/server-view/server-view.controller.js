( function () {
    'use strict'

    class ServerViewController {
        constructor(API, $stateParams) {
            this.id = 9;
            // TODO load this in router
            API.LiveVirtualServer.get({
                id : $stateParams["virtualServerId"]
            }, server => {
                this.id = server.id;
                this.name = server.name;
            });
        }
    }

    angular.module( 'daxude.controllers' )
        .controller( "ServerViewController", ServerViewController );
} )();
