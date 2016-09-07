( function () {
    'use strict'

    class VirtualserverPanelController {
        constructor(API) {
          API.LiveVirtualServer.get({
            id : this.id
          }, virtualserver => {
              this.name = virtualserver.name;
              this.clients = API.LiveVirtualServerClients.query({
                id : this.id
              });
          });
        }
    }

    angular.module( 'daxude.controllers' )
        .controller( "VirtualserverPanelController", VirtualserverPanelController );
} )();
