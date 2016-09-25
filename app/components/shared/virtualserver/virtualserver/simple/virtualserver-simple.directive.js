( function () {
  'use strict'

  class VirtualserverSimple {
    constructor() {
      this.restrict = 'E';
      this.scope = {
          'id': '='
      };
      this.bindToController = true;
      this.replace = true;
      this.controller = 'VirtualserverController';
      this.controllerAs = 'virtualserver';
      this.templateUrl = 'assets/templates/virtualserver-simple.html';
    }
  }

  angular.module( 'daxude.directives' )
    .directive( "virtualserverSimple", () => new VirtualserverSimple() );
} )();
