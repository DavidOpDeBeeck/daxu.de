( function () {
    'use strict'

    class OverviewController {
        constructor(API) {
            this.virtualservers = API.LiveVirtualServers.query();
        }
    }

    angular.module( 'daxude.controllers' )
        .controller( "OverviewController", OverviewController );
} )();
