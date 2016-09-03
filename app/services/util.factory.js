( function () {
    'use strict'
    angular.module( 'daxude.services' )
        .factory( "UTIL", utilFactory )

    function utilFactory ( $resource ) {

        var factory = {
            msToTime : msToTime,
            formatNumber : formatNumber,
            findLargestOccurence : findLargestOccurence
        };

        return factory;

        ///////////////////

        function msToTime ( duration ) {
            var seconds = parseInt( (duration / 1000) % 60 );
            var minutes = parseInt( (duration / (1000 * 60)) % 60 );
            var hours = parseInt( (duration / (1000 * 60 * 60)) % 24 );
            var days = parseInt( (duration / (1000 * 60 * 60 * 24)) );

            minutes = ( minutes < 10 ) ? "0" + minutes : minutes;
            seconds = ( seconds < 10 ) ? "0" + seconds : seconds;

            return ((days > 0) ? days + "d " : "") + hours + ":" + minutes + ":" + seconds;
        };

        function formatNumber ( number ) {
            var number = number.toFixed(2) + '';
            var x = number.split('.');
            var x1 = x[0];

            var rgx = /(\d+)(\d{3})/;

            while (rgx.test(x1))
                x1 = x1.replace(rgx, '$1' + '.' + '$2');

            return x1;
        };

        function findLargestOccurence ( array ) {
            var largest;
            array.forEach( function ( occurrence ) {
                if ( largest == undefined )
                    largest = occurrence;
                else if ( (new Date( occurrence.last )) > (new Date( largest.last )) )
                    largest = occurrence;
            } );
            return largest.value;
        };
    };
} )();
