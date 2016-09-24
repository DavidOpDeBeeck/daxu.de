( function () {
    'use strict'

    class VirtualserverClients {
      constructor() {
        this.restrict = 'E';
        this.scope = {
            'id': '='
        };
        this.bindToController = true;
        this.replace = true;
        this.controller = 'VirtualserverClientsController';
        this.controllerAs = 'clients';
        this.templateUrl = 'assets/templates/virtualserver-clients.html';
      }
    }

    angular.module( 'daxude.directives' )
      .directive( "virtualserverClients", () => new VirtualserverClients() );
} )();
