( function () {
    'use strict'

    class JoinController {
        constructor( API , virtualServerId , password ) {
          this.error = null;
          this.password = password;
          this.virtualServer = API.LiveVirtualServer.get({
              id : virtualServerId
          }, response => {
              if ( response.code === "404" ) {
                  this.error = response.message[ 0 ];
                  return;
              }
              this.virtualServer = response;
              this.redirect();
          });
        }
        redirect() {
          if ( this.password )
              window.location = "ts3server://daxu.de?port=" + this.virtualServer.port + "&password=" + this.password;
          else
              window.location = "ts3server://daxu.de?port=" + this.virtualServer.port;
        }
    }

    angular.module( 'daxude.controllers' )
      .controller( "JoinController", JoinController );
} )();
