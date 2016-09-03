( function () {
    'use strict'
    angular.module( 'daxude.controllers' )
        .controller( "ClientCountriesStatisticController", ClientCountriesStatisticController );

    function ClientCountriesStatisticController ( API ) {

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
            API.ClientCountries.get( response => {
                var data = response.toJSON();
                $.each( data , ( key , value ) => {
                    vm.graph.data[ 0 ].push( value );
                    vm.graph.labels.push( key );
                } );
            } );
        }
    }
} )();
