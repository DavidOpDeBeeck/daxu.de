( function () {
    'use strict'
    angular.module( 'daxude.controllers' )
        .controller( "MostAverageTimeConnectedRankingController", MostAverageTimeConnectedRankingController );

    function MostAverageTimeConnectedRankingController ( API , UTIL ) {

        let vm = this;

        ///////////////////

        vm.clients = [];

        ///////////////////

        vm.loadMore = loadMore;

        activate();

        ///////////////////

        function activate() {
            API.ClientAverageConnectedTime.query( {
                'limit'  : 10 ,
                'offset' : vm.clients.length
            } , clients => {
                vm.clients = vm.clients.concat(clients.map( client => {
                    client.user_name = UTIL.findLargestOccurence( client.user_names );
                    client.average_time_connected_text = UTIL.msToTime( client.average_connected_time )
                    return client;
                }));
            } );
        }

        function loadMore () {
            activate();
        }
    }
} )();
