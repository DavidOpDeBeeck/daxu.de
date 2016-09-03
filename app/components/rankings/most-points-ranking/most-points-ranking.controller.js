( function () {
    'use strict'
    angular.module( 'daxude.controllers' )
        .controller( "MostPointsRankingController", MostPointsRankingController );

    function MostPointsRankingController ( API , UTIL ) {

        let vm = this;

        ///////////////////

        vm.clients = [];

        ///////////////////

        vm.loadMore = loadMore;

        activate();

        ///////////////////

        function activate() {
            API.ClientTopScore.query( {
                'limit'  : 10 ,
                'offset' : vm.clients.length
            } , clients => {
                vm.clients = vm.clients.concat(clients.map( client => {
                    client.user_name = UTIL.findLargestOccurence( client.user_names );
                    client.score = UTIL.formatNumber( client.score );
                    return client;
                }));
            } );
        }

        function loadMore () {
            activate();
        }
    }
} )();
