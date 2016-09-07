( function () {
    'use strict'
    angular.module( 'daxude.services' )
        .factory( "Utils", utilFactory )

    function utilFactory ( $resource ) {
        return {
            msToTime( duration ) {
                let seconds = parseInt((duration / 1000) % 60),
                    minutes = parseInt((duration / (1000 * 60)) % 60),
                    hours = parseInt((duration / (1000 * 60 * 60)) % 24),
                    days = parseInt((duration / (1000 * 60 * 60 * 24)));
                minutes = (minutes < 10) ? "0" + minutes : minutes;
                seconds = (seconds < 10) ? "0" + seconds : seconds;
                return `${days > 0 ? days + "d " : ""}${hours}:${minutes}:${seconds}`;
            },
            formatNumber( number ) {
                let n = number.toFixed(2) + '',
                    x = n.split('.'),
                    x1 = x[0],
                    rgx = /(\d+)(\d{3})/;

                while (rgx.test(x1))
                    x1 = x1.replace(rgx, '$1' + '.' + '$2');

                return x1;
            },
            findLargestOccurence( array ) {
                let largest = array[0];
                array.forEach( o => {
                    if ( new Date( o.last ) > new Date( largest.last ) )
                        largest = o;
                } );
                return largest.value;
            }
        };
    };
} )();
