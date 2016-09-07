( function () {
    'use strict'

    class ClientController {
        constructor() {
            this.user_name = this.clientInfo.user_name;
            this.time_connected = this.clientInfo.time_connected;
        }
    }

    angular.module( 'daxude.controllers' )
        .controller( "ClientController", ClientController );
} )();
