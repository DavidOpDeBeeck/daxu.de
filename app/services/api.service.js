( function () {
    'use strict'
    angular.module( 'daxude.services' )
        .factory( "API", apiService )

    function apiService ( $resource , apiUrl ) {

        return {
          LiveHost                    : $resource( apiUrl + "/live/host/1" ) ,
          LiveClients                 : $resource( apiUrl + "/live/host/1/clients" ) ,
          LiveVirtualServers          : $resource( apiUrl + "/live/host/1/virtualservers" ) ,
          LiveVirtualServer           : $resource( apiUrl + "/live/virtualserver/:id" , { id : '@id' } ) ,
          LiveVirtualServerClients    : $resource( apiUrl + "/live/virtualserver/:id/clients", { id : '@id' } ) ,
          ClientVersions              : $resource( apiUrl + "/stats/client_versions" ) ,
          ClientPlatforms             : $resource( apiUrl + "/stats/client_platforms" ) ,
          ClientCountries             : $resource( apiUrl + "/stats/client_countries" ) ,
          ClientTopConnections        : $resource( apiUrl + "/stats/client_connections" ) ,
          ClientAverageConnectedTime  : $resource( apiUrl + "/stats/client_average_connected_time" ) ,
          ClientTopScore              : $resource( apiUrl + "/stats/client_scores" ) ,
          ClientSearchUserName        : $resource( apiUrl + "/search/client" , { userName : 'userName' } ) ,
          ClientSearchUserNamePattern : $resource( apiUrl + "/search/client" , { userNamePattern : 'userNamePattern' } ) ,
          ClientSearchIdentifier      : $resource( apiUrl + "/search/client" , { identifier : 'identifier' } ) ,
          Report                      : $resource( apiUrl + "/report" ),
          WhoAmI                      : $resource( apiUrl + "/whoami" )
        }

    };
} )();
