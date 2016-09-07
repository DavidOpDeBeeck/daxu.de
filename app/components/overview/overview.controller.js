( function () {
    'use strict'

    class OverviewController {
        constructor(API) {
          API.LiveVirtualServers.query({}, (virtualservers) => this.virtualservers = virtualservers );
        }
    }

    angular.module( 'daxude.controllers' )
        .controller( "OverviewController", OverviewController );
} )();
