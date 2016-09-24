( function () {
    'use strict'

    class DashboardController {
        constructor(API) {
          API.LiveVirtualServers.query({}, virtualservers => this.virtualservers = virtualservers );
        }
    }

    angular.module( 'daxude.controllers' )
        .controller( "DashboardController", DashboardController );
} )();
