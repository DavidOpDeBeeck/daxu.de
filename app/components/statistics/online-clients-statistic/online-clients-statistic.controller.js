( function () {
    'use strict'
    angular.module( 'daxude.controllers' )
        .controller( "OnlineClientsStatisticController", OnlineClientsStatisticController );

    function OnlineClientsStatisticController ( API , StatUtils ) {

        let vm = this;

        ///////////////////

        vm.graph = {
            labels      : StatUtils.dayLabels(),
            data        : [],
            series      : [],
            options     : {
                animation           : false,
                responsive          : true,
                maintainAspectRatio : false,
                legend: { display: true }
            }
        };

        ///////////////////

        activate();

        ///////////////////

        function activate() {
            let now = new Date();
            let nowMinusOneWeek = now.getTime() - 518400000 - now.getHours() * 3600000 - now.getMinutes() * 60000 - now.getSeconds() * 1000;
            let series = [];
            let data = [];
            let reportDate, reportHour;

            API.Report.query({
                'from' : nowMinusOneWeek,
                'to'   : now.getTime()
            }, reports => {
                reports.forEach( report => {
                    reportDate = new Date( report.from ).toDateString();
                    reportHour = new Date( report.from ).getHours();

                    if ( series.indexOf( reportDate ) < 0 ) {
                        series.push( reportDate );
                        data.push( StatUtils.dayNullArray() );
                    }

                    let reportDateIndex = series.indexOf( reportDate );

                    if ( !report.failed ) {
                        if ( data[ reportDateIndex ][ reportHour ] == undefined ) data[ reportDateIndex ][ reportHour ] = 0;
                        data[ reportDateIndex ][ reportHour ] += report.max_clients;
                    }
                });

                vm.graph.series = series;
                vm.graph.data = data;
            });
        }
    }
} )();
