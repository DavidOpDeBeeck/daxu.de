( function () {
	'use strict'

	class ClientGraph {
		constructor() {
			this.scope = {
				'online': '=',
				'max': '='
			},
			this.bindToController = true,
			this.replace = true,
			this.restrict = 'E',
			this.controller = 'ClientGraphController',
			this.controllerAs = 'clientGraph',
			this.templateUrl = 'assets/templates/client-graph.html'
		}
	}

	angular.module( 'daxude.directives' )
		.directive( "clientGraph", () => new ClientGraph() );
} )();
