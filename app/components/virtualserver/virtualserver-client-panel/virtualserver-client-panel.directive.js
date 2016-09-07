( function () {
    'use strict'

    class VirtualserverClientPanel {
      constructor() {
        this.restrict = 'E';
        this.scope = {
            'info': '='
        };
        this.bindToController = true;
        this.replace = true;
        this.controller = 'VirtualserverClientPanelController';
        this.controllerAs = 'client';
        this.templateUrl = 'assets/templates/virtualserver-client-panel.html';
      }
    }

    angular.module( 'daxude.directives' )
      .directive( "virtualserverClientPanel", () => new VirtualserverClientPanel() );
} )();
