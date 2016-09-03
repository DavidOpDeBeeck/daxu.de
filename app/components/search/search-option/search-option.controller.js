( function () {
    'use strict'
    angular.module( 'daxude.controllers' )
        .controller( "SearchOptionController", SearchOptionController );

    function SearchOptionController ( API ) {

        let vm = this;

        ///////////////////

        vm.name;
        vm.value;
        vm.option;

        ///////////////////

        vm.isSelected = isSelected;
        vm.toggleActive = toggleActive;

        ///////////////////

        function isSelected () {
            return vm.option === vm.value;
        }

        function toggleActive () {
            vm.option = ( vm.option == vm.value ) ? '' : vm.value;
        }
    }
} )();
