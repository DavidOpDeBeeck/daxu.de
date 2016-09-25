( function () {
    'use strict'
    angular.module( 'daxude.controllers' )
        .controller( "ClientPlatformsStatisticController", ClientPlatformsStatisticController );

    function ClientPlatformsStatisticController ( API ) {

        let vm = this;

        ///////////////////

        vm.graph = {
            labels      : [],
            data        : [ [] ],
            series      : [ 'Clients' ],
            options     : {
                responsive          : true,
                maintainAspectRatio : false
            }
        };

        ///////////////////

        activate();

        ///////////////////

        function activate() {
            API.ClientPlatforms.get( response => {
                var platforms = response.toJSON();
                Object.keys(platforms).forEach(platform => {
                    vm.graph.data[ 0 ].push( platforms[platform] );
                    vm.graph.labels.push( platform );
                });
            } );
        }
    }
} )();
