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
                var countries = response.toJSON();
                Object.keys(countries).forEach(country => {
                    vm.graph.data[ 0 ].push( countries[country] );
                    vm.graph.labels.push( country );
                });
            } );
        }
    }
} )();
