(function() {
    'use strict';

    angular
        .module('errApp')
        .controller('MainController', MainController);
    // inject toastr here
    MainController.$inject = ['MainFactory', 'toastr'];

    /* @ngInject */
    function MainController(MainFactory, toastr) {
        var vm = this;
        vm.title = 'MainController';


        activate();

        ////////////////

        function activate() {
            getFile();
        }

        function getFile() {
            MainFactory.getFile()
                .then(function(response) {
                        vm.topspots = response.data;
                        // if data goes through then show a success sign
                        toastr.success('We have topspots!!');
                    },
                    function(error) {
                        if (typeof error === 'object') {
                            // if there is a problem show where its at
                            toastr.error('Problem at: ' + error.data);
                        } else {
                            toastr.error(error);
                        }
                    }
                )
        }
    }

})();
