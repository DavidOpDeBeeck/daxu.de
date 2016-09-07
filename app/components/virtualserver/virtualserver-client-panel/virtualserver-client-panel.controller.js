( function () {
    'use strict'

    class VirtualserverClientPanelController {
        constructor() {
            this.user_name = this.info.user_name;
            this.time_connected = this.info.time_connected;
        }
    }

    angular.module( 'daxude.controllers' )
        .controller( "VirtualserverClientPanelController", VirtualserverClientPanelController );
} )();
