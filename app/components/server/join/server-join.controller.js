( function () {
    'use strict'

    class ServerJoinController {
        constructor( API , $stateParams ) {
          this.error = null;
          this.password = $stateParams["password"];
          API.LiveVirtualServer.get({
              id : $stateParams["id"]
          }, response => {
              if ( response.code === "404" ) {
                  this.error = response.message[ 0 ];
                  return;
              }
              this.virtualserver = response;
              this.redirect();
          });
        }
        redirect() {
          if ( this.password )
              window.location = "ts3server://daxu.de?port=" + this.virtualserver.port + "&password=" + this.password;
          else
              window.location = "ts3server://daxu.de?port=" + this.virtualserver.port;
        }
    }

    angular.module( 'daxude.controllers' )
      .controller( "ServerJoinController", ServerJoinController );
} )();
