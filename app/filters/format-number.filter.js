( function () {
    'use strict'
    angular.module( 'daxude.filters' )
        .filter( "formatNumber", Utils => item => Utils.formatNumber(item) );
} )();
