( function () {
    'use strict'

    class ClientGraphController {
        constructor() {
            this.graph = {
                data    : [ this.online , this.max - this.online ],
                labels  : [ 'Online Clients' , 'Open Slots' ],
                options : {
                    responsive          : true,
                    maintainAspectRatio : false
                }
            }
        }
    }

    angular.module( 'daxude.controllers' )
        .controller( "ClientGraphController", ClientGraphController );
} )();
