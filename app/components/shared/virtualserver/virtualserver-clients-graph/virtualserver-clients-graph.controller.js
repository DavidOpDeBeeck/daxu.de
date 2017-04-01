( function () {
    'use strict'

    class VirtualserverClientsGraphController {
        constructor(API) {
            API.LiveVirtualServer.get({
              id : this.id
            }, virtualserver => {
              let online = virtualserver.online_clients;
              let free = virtualserver.max_clients - virtualserver.online_clients;
              this.graph = {
                  data    : [ online , free ],
                  labels  : [ 'Online Clients' , 'Free Slots' ],
                  options : {
                      responsive          : true,
                      maintainAspectRatio : false,
                      legend: { display: true }
                  }
              }
            });
        }
    }

    angular.module( 'daxude.controllers' )
        .controller( "VirtualserverClientsGraphController", VirtualserverClientsGraphController );
} )();
