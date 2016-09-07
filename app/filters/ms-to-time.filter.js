( function () {
    'use strict'
    angular.module( 'daxude.filters' )
        .filter( "msToTime", Utils => item => Utils.msToTime(item) );
} )();
