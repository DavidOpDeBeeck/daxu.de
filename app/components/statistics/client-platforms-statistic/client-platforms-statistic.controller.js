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
                var data = response.toJSON();
                $.each( data , ( key , value ) => {
                    vm.graph.data[ 0 ].push( value );
                    vm.graph.labels.push( key );
                } );
            } );
        }
    }
} )();
