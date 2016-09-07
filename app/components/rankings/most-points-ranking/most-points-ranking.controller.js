( function () {
    'use strict'
    angular.module( 'daxude.controllers' )
        .controller( "MostPointsRankingController", MostPointsRankingController );

    function MostPointsRankingController ( API , Utils ) {

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
                vm.clients = vm.clients.concat(clients);
            } );
        }

        function loadMore () {
            activate();
        }
    }
} )();
