( function () {
    'use strict'

    class VirtualserverClientsGraphController {
        constructor(API) {
            API.LiveVirtualServer.get({
              id : this.id
            }, virtualserver => {
              let online = virtualserver.online_clients;
              let open = virtualserver.max_clients - virtualserver.online_clients;
              this.graph = {
                  data    : [ online , open ],
                  labels  : [ 'Online Clients' , 'Open Slots' ],
                  options : {
                      responsive          : true,
                      maintainAspectRatio : false
                  }
              }
            });
        }
    }

    angular.module( 'daxude.controllers' )
        .controller( "VirtualserverClientsGraphController", VirtualserverClientsGraphController );
} )();
