( function () {
    'use strict'
    angular.module( 'daxude.filters' )
        .filter( "largestOccurence", Utils => item => Utils.findLargestOccurence(item) );
} )();
