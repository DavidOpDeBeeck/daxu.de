( function () {
	'use strict'
	angular.module( 'daxude.directives' )
		.directive( "clientGraph", clientGraph );

	function clientGraph() {
		let directive = {
			scope: {
				'online': '=',
				'max': '='
			},
			bindToController: true,
			replace: true,
			restrict: 'E',
			controller: 'OnlineClientsChartController',
			controllerAs: 'clientGraph',
			templateUrl: 'assets/templates/client-graph.html'
		};
		return directive;
	}
} )();
