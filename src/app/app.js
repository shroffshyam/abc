'use strict';

(function(window, angular, undefined) {

  angular.module('admin-dashboard', [
    'analytics',
    'primaryMetrics',
    'd3Charts',
    'ngLodash',
    'ui.bootstrap',
    'ui.router',
    'ui.validate',
    'ngSanitize',
    'ngResource',
    'cgBusy',
    'ngDialog',
    'ngAria'
  ])
  .config([ '$stateProvider','$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
      // For any unmatched url, redirect to /overview
      $urlRouterProvider.otherwise('/overview');

      $stateProvider
        .state('overview', {
          url   : '/overview',
          views : {
            'main' : {
              templateUrl  : 'app/views/overview/overview.html',
            }
          },

        })
    }
  ])
  .controller('AppController', [
    '$scope',
    function($scope) {
      let model = this;
    }
  ])
  .value('cgBusyDefaults', {
    templateUrl: 'app/components/cg-busy/cg-busy-template.html',
    backdrop: false,
    minDuration: 250
  })

})(window, window.angular);
