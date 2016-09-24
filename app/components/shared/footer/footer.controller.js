( function () {
	'use strict'
	angular.module( 'daxude.controllers' )
		.controller( "FooterController", FooterController );

	function FooterController ( API ) {

		let vm = this;

		///////////////////

		vm.status = {
			text 	: "offline",
			online : false
		};
		vm.lastUpdated;
		vm.version = "2.0.0"

		///////////////////

		activate();

		///////////////////

		function activate() {
			API.LiveHost.get( host => {
				vm.status.online = host.online;
				vm.status.text = host.online ? 'online' : 'offline';
				vm.lastUpdated = new Date( parseInt( host.last_updated ) ).toLocaleString()
			} );
		}
	}
} )();
