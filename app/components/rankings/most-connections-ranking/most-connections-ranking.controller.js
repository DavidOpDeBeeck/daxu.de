( function () {
    'use strict'
    angular.module( 'daxude.controllers' )
        .controller( "MostConnectionsRankingController", MostConnectionsRankingController );

    function MostConnectionsRankingController ( API , UTIL ) {

        let vm = this;

        ///////////////////

        vm.clients = [];

        ///////////////////

        vm.loadMore = loadMore;

        activate();

        ///////////////////

        function activate() {
            API.ClientTopConnections.query( {
                'limit'  : 10 ,
                'offset' : vm.clients.length
            } , clients => {
                vm.clients = vm.clients.concat(clients.map( client => {
                    client.user_name = UTIL.findLargestOccurence( client.user_names );
                    return client;
                }));
            } );
        }

        function loadMore () {
            activate();
        }
    }
} )();
