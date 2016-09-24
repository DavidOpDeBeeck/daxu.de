( function () {
    'use strict'

    class VirtualserverController {
        constructor(API) {
          API.LiveVirtualServer.get({
            id : this.id
          }, virtualserver => {
              this.name = virtualserver.name;
          });
        }
    }

    angular.module( 'daxude.controllers' )
        .controller( "VirtualserverController", VirtualserverController );
} )();
