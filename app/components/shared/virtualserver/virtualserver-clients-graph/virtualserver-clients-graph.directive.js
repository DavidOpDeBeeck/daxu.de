( function () {
	'use strict'

	class VirtualserverClientsGraph {
		constructor() {
			this.scope = {
				'id': '='
			},
			this.bindToController = true,
			this.replace = true,
			this.restrict = 'E',
			this.controller = 'VirtualserverClientsGraphController',
			this.controllerAs = 'virtualserverClientsGraph',
			this.templateUrl = 'assets/templates/virtualserver-clients-graph.html'
		}
	}

	angular.module( 'daxude.directives' )
		.directive( "virtualserverClientsGraph", () => new VirtualserverClientsGraph() );
} )();
