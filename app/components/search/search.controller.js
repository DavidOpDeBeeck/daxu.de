( function () {
    'use strict'
    angular.module( 'daxude.controllers' )
        .controller( "SearchController", SearchController );

    function SearchController ( API , UTIL ) {

        let vm = this;

        ///////////////////

        vm.query = '';
        vm.searching = false;

        vm.clients = [];

        vm.orderDir = 'true';
        vm.orderProp = 'total_connections';

        ///////////////////

        vm.search = search;
        vm.orderDirection = orderDirection;

        ///////////////////

        function search () {
          var query = vm.query;
          if ( query.length > 2 ) {
              vm.clients = [];
              vm.searching = true;
              API.ClientSearchUserNamePattern.query({
                  userNamePattern : vm.query,
                  limit           : 25,
                  offset          : 0
              }, clients => {
                  if ( query === vm.query ) {
                    vm.clients = clients.map( client => {
                        client.user_name = UTIL.findLargestOccurence( client.user_names );
                        client.average_connected_time_text = UTIL.msToTime( client.average_connected_time );
                        client.last_connected = new Date( client.last_connected ).toLocaleString();
                        return client;
                    });
                    vm.searching = false;
                  }
              });
          } else {
            vm.clients = [];
            vm.searching = false;
          }
        }

        function orderDirection () {
            return vm.orderDir === 'true';
        }
    }
} )();
