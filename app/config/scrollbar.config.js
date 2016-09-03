( function () {
	angular.module( 'daxude.config' )
		.config( ScrollBarsProvider => {
			ScrollBarsProvider.defaults = {
				scrollButtons: {
					scrollAmount: 'auto',
					enable: true
				},
				scrollInertia: 400,
				axis: 'y',
				theme: 'dark-thin'
			};
		} )
		.run( $rootScope => {
			$rootScope.defaultScrollbar = {
				axis: 'xy',
				theme: 'minimal-dark'
			};
		} );
} )();
