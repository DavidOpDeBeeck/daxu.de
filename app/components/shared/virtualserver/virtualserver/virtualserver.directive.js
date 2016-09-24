( function () {
  'use strict'

  class Virtualserver {
    constructor() {
      this.restrict = 'E';
      this.scope = {
          'id': '='
      };
      this.bindToController = true;
      this.replace = true;
      this.controller = 'VirtualserverController';
      this.controllerAs = 'virtualserver';
      this.templateUrl = 'assets/templates/virtualserver.html';
    }
  }

  angular.module( 'daxude.directives' )
    .directive( "virtualserver", () => new Virtualserver() );
} )();
