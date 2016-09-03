( function () {
    'use strict'
    angular.module( 'daxude.controllers' )
        .controller( "OnlineClientsChartController", OnlineClientsChartController );

    function OnlineClientsChartController () {

        let vm = this;

        ///////////////////

        vm.online;
        vm.max;
        vm.graph = {
            data    : [ vm.online , (vm.max - vm.online) ],
            labels  : [ 'Online Clients' , 'Open Slots' ],
            options : {
                responsive          : true,
                maintainAspectRatio : false
            }
        }
    }
} )();
