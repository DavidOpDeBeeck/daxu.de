( function () {
    'use strict'
    angular.module( 'daxude.filters' )
        .filter( "username", () => item => item.length > 15 ? item.substring(0, 12) + '...' : item );
} )();
