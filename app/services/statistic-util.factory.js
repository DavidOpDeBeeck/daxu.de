( function () {
    'use strict'
    angular.module( 'daxude.services' )
        .factory( "StatUtils", statUtilFactory )

    function statUtilFactory ( $resource ) {
        return {
            dayLabels() {
                return Array
                    .from( new Array(24), ( o , i ) => `${(i < 10) ? "0" + i : i}:00` );
            },
            dayNullArray() {
                return Array
                    .from( new Array(24), o => null );
            }
        };
    };
} )();
