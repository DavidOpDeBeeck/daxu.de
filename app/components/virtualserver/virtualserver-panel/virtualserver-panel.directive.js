( function () {
  'use strict'

  class VirtualserverPanel {
    constructor() {
      this.restrict = 'E';
      this.scope = {
          'id': '='
      };
      this.bindToController = true;
      this.replace = true;
      this.controller = 'VirtualserverPanelController';
      this.controllerAs = 'virtualserver';
      this.templateUrl = 'assets/templates/virtualserver-panel.html';
    }
  }

  angular.module( 'daxude.directives' )
    .directive( "virtualserverPanel", () => new VirtualserverPanel() );
} )();
