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
            weekLabels() {
                return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            },
            dayNullArray() {
                return Array
                    .from( new Array(24), o => null );
            },
            weekNullArray() {
                return Array
                    .from( new Array(7), o => null );
            }
        };
    };
} )();
