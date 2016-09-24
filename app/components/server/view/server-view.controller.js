( function () {
    'use strict'

    class ServerViewController {
        constructor(API, $stateParams) {
            this.id = $stateParams["id"];
        }
    }

    angular.module( 'daxude.controllers' )
        .controller( "ServerViewController", ServerViewController );
} )();
