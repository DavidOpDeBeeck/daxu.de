( function () {
	'use strict'

	class VirtualserverClientGraph {
		constructor() {
			this.scope = {
				'id': '='
			},
			this.bindToController = true,
			this.replace = true,
			this.restrict = 'E',
			this.controller = 'VirtualserverClientGraphController',
			this.controllerAs = 'virtualserverClientGraph',
			this.templateUrl = 'assets/templates/virtualserver-client-graph.html'
		}
	}

	angular.module( 'daxude.directives' )
		.directive( "virtualserverClientGraph", () => new VirtualserverClientGraph() );
} )();
