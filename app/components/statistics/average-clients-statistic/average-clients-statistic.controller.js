( function () {
    'use strict'
    angular.module( 'daxude.controllers' )
        .controller( "AverageClientsStatisticController", AverageClientsStatisticController );

    function AverageClientsStatisticController ( API , StatUtils ) {

        let vm = this;

        ///////////////////

        vm.graph = {
            labels      : [],
            data        : [],
            series      : [],
            options     : {
                animation           : false,
                responsive          : true,
                maintainAspectRatio : false,
                legend              : { display: true }
            }
        };

        ///////////////////

        activate();

        ///////////////////

        function activate() {
            let servers = [1,2,3,4,5,9];
            servers.forEach(i => getStatisticForVirtualserver(i));
        }

        function getStatisticForVirtualserver( id ) {
            let now = new Date();
            let nowMinusOneWeek = now.getTime() - 518400000 - now.getHours() * 3600000 - now.getMinutes() * 60000 - now.getSeconds() * 1000;
            let series = [];
            let data = [];
            let reportDate, reportHour;

            API.LiveVirtualServer.get({
              id : id
            }, virtualserver => {
                API.Report.query({
                    'from' : nowMinusOneWeek,
                    'to'   : now.getTime(),
                    'virtualServer': virtualserver.id
                }, reports => {
                    let reportsPerDate = {};
                    let totalPerDate = {};

                    reports.forEach( report => {
                        reportDate = new Date( report.from ).toDateString().slice(0, -5);

                        if (!reportsPerDate[reportDate]) {
                            reportsPerDate[reportDate] = 0;
                            totalPerDate[reportDate] = 0;
                        }

                        reportsPerDate[reportDate] += 1;
                        totalPerDate[reportDate] += report.max_clients;
                    });

                    if ( vm.graph.series.indexOf( virtualserver.name ) < 0 ) {
                        vm.graph.series.push( virtualserver.name );
                        vm.graph.data.push( StatUtils.weekNullArray() );
                    }

                    let virtualserverIndex = vm.graph.series.indexOf( virtualserver.name );

                    Object.keys(reportsPerDate).forEach(date => {
                        if (vm.graph.labels.indexOf( date ) < 0 ) {
                            vm.graph.labels.push( date );
                        }

                        let dateIndex = vm.graph.labels.indexOf( date );
                        vm.graph.data[ virtualserverIndex ][ dateIndex ] = Math.floor(totalPerDate[date] / reportsPerDate[date]);
                    });
                });
            });
        }
    }
} )();
