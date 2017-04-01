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
                animation           : false,
                responsive          : true,
                maintainAspectRatio : false,
                legend: { display: true }
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
