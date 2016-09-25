( function () {
  'use strict'

  class VirtualserverAdvanced {
    constructor() {
      this.restrict = 'E';
      this.scope = {
          'id': '='
      };
      this.bindToController = true;
      this.replace = true;
      this.controller = 'VirtualserverController';
      this.controllerAs = 'virtualserver';
      this.templateUrl = 'assets/templates/virtualserver-advanced.html';
    }
  }

  angular.module( 'daxude.directives' )
    .directive( "virtualserverAdvanced", () => new VirtualserverAdvanced() );
} )();
