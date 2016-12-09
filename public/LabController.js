(function () {
    'use strict'   
    angular.module('app')
        .controller('LabController', [LabController]);

    function LabController() {
        var vm = this;
        vm.hello = "This is from AngularJS";
    };
})();